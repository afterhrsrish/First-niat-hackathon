# Deployment guide

The app serves the Vite build and Express API from one Node service. Deploy it to a host that supports persistent disk storage for SQLite.

## Render-style Node service

1. Connect the public GitHub repository.
2. Build command: `npm install && npm run build`
3. Start command: `npm start`
4. Set `NODE_ENV=production`, a long random `JWT_SECRET`, and optionally `GEMINI_API_KEY` / `GEMINI_MODEL`.
5. Attach persistent storage and set `DB_PATH` to a path on that disk (for example `/var/data/relayops.db`).
6. Open the public URL and verify the demo sign-in, sample requests, and status update.

SQLite is appropriate for this demo when the host provides persistent disk. For multi-instance production deployment, replace it with PostgreSQL. Never add `.env` or a live key to GitHub.
