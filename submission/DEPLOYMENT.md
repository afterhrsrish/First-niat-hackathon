# Deploy RelayOps

## Quick deploy on Render

Use the [one-click Render Blueprint](https://render.com/deploy?repo=https://github.com/afterhrsrish/First-niat-hackathon). Render reads `render.yaml` from the public repository, builds the Vite frontend, starts Express, and generates `JWT_SECRET` for the service. Add `GEMINI_API_KEY` in the setup form if you want live Gemini plans; leaving it blank enables demo mode.

After Render finishes, copy the public `onrender.com` URL from the service dashboard and open it. Enter the demo workspace and load sample requests. The `/api/health` endpoint reports service status.

The Blueprint uses Render's free web service. Free services can sleep after inactivity and do not have persistent disks, so the SQLite demo data can reset when the service restarts. This is suitable for a short hackathon demo. For data that must survive restarts, choose a paid service with a persistent disk or move storage to PostgreSQL.

## Manual setup

1. Create a Render Web Service from `afterhrsrish/First-niat-hackathon`.
2. Build command: `npm install && npm run build`.
3. Start command: `npm start`.
4. Set `NODE_ENV=production`, a long random `JWT_SECRET`, and optionally `GEMINI_API_KEY` / `GEMINI_MODEL`.
5. Set health check path to `/api/health`.
6. Open the public service URL and verify sign-in, sample requests, and status changes.

Never add `.env` or a live API key to GitHub.
