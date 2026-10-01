# RelayOps — Hackathon submission

## Problem statement

Business teams coordinate repetitive requests across email, chat, forms, and separate tools. Staff must repeatedly interpret requests, find missing context, decide who owns each step, check policies, and chase updates. This manual coordination creates delays, inconsistent decisions, and requests that stall between teams.

## Solution description

RelayOps is an AI-powered operations desk that turns a single request into a coordinated, reviewable workflow. The requester submits the need, context, team, and priority once. Four focused AI agents collaborate: the Intake Agent classifies and extracts intent; the Planner Agent builds ordered steps; the Policy Agent checks risk and approval needs; and the Action Agent prepares a clear handoff. RelayOps saves the request and plan in SQLite, highlights the next recommended step, and lets a human approve or update status before any external action.

## Why agentic AI

The work requires more than a single summary: it combines classification, sequencing, policy reasoning, and an owner-ready action. RelayOps gives those responsibilities to specialist agents and presents their shared result as one execution plan. For the hackathon demo, the agents produce a safe proposed plan; they do not pretend to make irreversible changes in third-party systems.

## Key features

- One intake for Customer Support, Finance, IT & Access, and Operations.
- Four-agent workflow with step-by-step progress.
- Gemini live mode with a backend-only API key and a deterministic demo mode.
- Priority and risk assessment, recommended next step, and human approval gate.
- Persistent request queue and status changes.
- JWT authentication, bcrypt password hashing, and Zod validation.

## Technology

React, Vite, React Router, Node.js, Express, SQLite, JWT, bcryptjs (bcrypt-compatible), Zod, and Google Gemini API.
