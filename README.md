# RelayOps — Agentic Operations Desk

**One intake. Four focused agents. A coordinated outcome.**

RelayOps helps teams handle repetitive cross-functional requests without losing context between inboxes. A requester submits a task once; four specialist agents classify it, plan the work, check policy risk, and prepare a clear owner handoff. A human reviews and approves before any external action.

## Hackathon submission

- **Problem statement:** Business teams receive routine requests across fragmented channels and systems. Manual triage, unclear ownership, repeated status checks, and inconsistent policy checks slow resolution and create avoidable mistakes.
- **Solution description:** RelayOps is a lightweight operations desk for internal requests. Its Intake Agent extracts intent, Planner Agent creates a sequence of steps, Policy Agent checks risk and approval needs, and Action Agent prepares a next-step handoff. The request and agent plan are stored together, with a human approval gate before work is routed.
- **AI:** Google Gemini API (server-side only). Configure `GEMINI_API_KEY` to enable live generation. Without a key, a deterministic demo planner shows the same four-agent flow.
- **Database:** SQLite.
- **Deployment:** Follow [deployment guide](submission/DEPLOYMENT.md).
- **Demo:** Follow the [3–5 minute demo script](submission/DEMO_SCRIPT.md).

## What works

- React + Vite web app with React Router and responsive UI.
- Node.js + Express API, JWT authentication, bcrypt password hashing, and Zod request validation.
- SQLite persistence for users and requests.
- Four-agent orchestration with Gemini JSON output and a deterministic fallback.
- Request queue, priority/risk flags, agent step timeline, recommended next step, approval status, and sample data.
- AI key is read only by the backend from environment variables; it is never sent to the browser.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env
# Set a long random JWT_SECRET. Add GEMINI_API_KEY to .env to enable Gemini.
npm run dev
```

Open http://localhost:5173. Use **Enter demo workspace** to create or sign into the sample account, then load the sample requests. The API runs on port 4000. To run a production build locally:

```bash
npm run build
NODE_ENV=production npm start
```

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `JWT_SECRET` | Yes for production | Signs session tokens; set a long random value |
| `GEMINI_API_KEY` | No | Enables live Gemini agent planning |
| `GEMINI_MODEL` | No | Gemini model name; defaults to `gemini-2.5-flash` |
| `PORT` | No | API port; defaults to `4000` |
| `DB_PATH` | No | SQLite file path; defaults to `server/relayops.db` |
| `CLIENT_ORIGIN` | No | Allowed browser origin for CORS |

## Agent workflow

1. **Intake Agent** — classifies the request and extracts the requested outcome.
2. **Planner Agent** — breaks the request into concise, ordered steps.
3. **Policy Agent** — identifies risk and approval needs, especially for financial or access changes.
4. **Action Agent** — prepares a handoff with an owner-ready next action.
5. **Human review** — approves and updates request status before any external system action.

The demo is intentionally honest: agents prepare plans and handoffs, but do not claim to write to external business systems.

## Project structure

```text
client/src/       React app and styles
server/index.js   Express routes, auth, validation, persistence
server/agents.js  Gemini orchestration and demo fallback
server/db.js      SQLite schema
submission/       Hackathon statement, demo script, deployment guide
```

## Scope and next steps

This MVP focuses on request intake and controlled handoff. Production use would require managed database hosting, rate limiting, stronger account recovery, audit retention controls, integrations with the team's ticketing and finance systems, and role-based approvals. Do not put a real secret in the repository.
