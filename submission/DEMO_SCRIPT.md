# RelayOps demo — 3 minutes 45 seconds

## 0:00–0:30 — The problem

“Teams lose time when requests arrive in different places. Someone has to interpret the request, decide who owns it, check policy, and chase the next step. RelayOps coordinates that work from one intake.”

## 0:30–1:00 — The dashboard

Open RelayOps and enter the demo workspace. Point out the request queue, review count, priority flag, and four-agent team. Load the three sample requests if the queue is empty.

## 1:00–2:10 — Submit a request

Click **New request**. Enter:

- Title: `Urgent: laptop access for new starter`
- Team: `IT & Access`
- Priority: `High`
- Requested by: `Jordan Lee`
- Description: `Maya Chen starts tomorrow and cannot access the product workspace or design drive. Confirm the correct team owner and prepare access before 9 AM.`

Run the workflow. Explain that a live Gemini key produces the agent plan; without one, the deterministic demo planner keeps the interface usable.

## 2:10–3:10 — Show agent collaboration

Select the new request. Walk through Intake (classifies and extracts), Planner (sequences work), Policy (checks access risk), and Action (prepares the handoff). Read the recommended next step and risk rationale. Explain that the app saves the plan and does not claim to change external systems.

## 3:10–3:45 — Human review and close

Approve and route the request, then show its updated status and the dashboard count. Close with: “RelayOps removes repetitive coordination while keeping a human approval gate for the actions that matter.”

## Recording checklist

- Record the browser at 1080p with the app already running.
- Keep the demo to one new request; avoid spending time typing long descriptions.
- If using Gemini, verify the server has `GEMINI_API_KEY` before recording. Never expose the key on screen.
- Keep the cursor moving and narrate the four agents as the plan appears.
