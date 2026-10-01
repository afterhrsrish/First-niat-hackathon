const priorities = ['low','medium','high','critical'];
function fallbackPlan(input){
 const text=(input.title+' '+input.description).toLowerCase();
 const urgent=/urgent|today|immediately|outage|blocked|breach|critical/.test(text);
 const finance=/invoice|payment|refund|budget|purchase|vendor/.test(text);
 const category=input.category;
 const steps=[
  {agent:'Intake Agent',role:'Classify & clarify',status:'complete',detail:`Classified as ${category.toLowerCase()} and extracted the requested outcome.`},
  {agent:'Planner Agent',role:'Build an execution plan',status:'complete',detail:finance?'Check the source record, validate the amount and owner, then prepare the required action.':'Gather the relevant context, identify the owner, and prepare the next best action.'},
  {agent:'Policy Agent',role:'Check risk & policy',status:'complete',detail:finance?'Verify approval threshold and supporting evidence before any financial change.':'Check access, customer impact, and policy requirements before execution.'},
  {agent:'Action Agent',role:'Coordinate handoff',status:'ready',detail:'Create an owner-ready task with a clear next step and requested-by context.'}
 ];
 return {summary:`${urgent?'Time-sensitive request. ':''}${input.description.slice(0,185)}${input.description.length>185?'…':''}`,priority:urgent?'High':input.priority==='critical'?'High':'Normal',risk:finance?'Medium':'Low',riskReason:finance?'This request could affect a financial record; confirm authorization before execution.':'No irreversible action is taken. A human can review the proposed next step.',recommendation:finance?'Validate the source record and approval limit, then route to the finance owner.':'Assign a clear owner, confirm the missing context, and complete the recommended next step.',steps,approvalRequired:true,agentMode:'Demo mode'};
}
export async function orchestrate(input){
 const key=process.env.GEMINI_API_KEY;
 if(!key) return fallbackPlan(input);
 try{
  const prompt=`You are RelayOps, a multi-agent operations desk. Simulate collaboration among four agents: Intake Agent classifies, Planner Agent decomposes work into steps, Policy Agent assesses risk, and Action Agent proposes a safe handoff. Do not claim to execute external actions. Return ONLY valid JSON with keys summary (string), priority (High|Normal), risk (Low|Medium|High), riskReason (string), recommendation (string), approvalRequired (boolean), steps (array of 4 objects with agent,role,status,detail; status complete or ready). Keep concise and grounded in the request. Request: ${JSON.stringify(input)}`;
  const res=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL||'gemini-2.5-flash'}:generateContent?key=${key}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:{responseMimeType:'application/json',temperature:0.25}})});
  if(!res.ok) throw new Error('Gemini request failed');
  const json=await res.json(); const raw=json.candidates?.[0]?.content?.parts?.[0]?.text; if(!raw) throw new Error('Empty model response');
  const plan=JSON.parse(raw); return {...plan,agentMode:'Gemini live'};
 }catch(err){console.error('AI plan fallback:',err.message);return fallbackPlan(input)}
}
