import Database from 'better-sqlite3';
const db = new Database(process.env.DB_PATH || 'server/relayops.db');
db.pragma('journal_mode = WAL');
db.exec(`CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, password_hash TEXT NOT NULL, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS requests(id TEXT PRIMARY KEY, title TEXT NOT NULL, category TEXT NOT NULL, requester TEXT NOT NULL, description TEXT NOT NULL, priority TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'Needs review', created_at TEXT NOT NULL, plan TEXT NOT NULL, risk TEXT NOT NULL, outcome TEXT NOT NULL);`);
export default db;
