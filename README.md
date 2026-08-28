# BBPF Foundation Website

React + Node.js + MySQL website based on the supplied BBPF screenshot.

## Run from VS Code without an API key

### 1. Start MySQL

You can use MySQL locally, or start only the MySQL Docker service:

```bash
docker compose up mysql
```

### 2. Run the backend

Open a VS Code terminal:

```bash
cd backend
npm install
npm run dev
```

The Node.js/Express backend runs on:

```text
http://localhost:5000
```

There is **no API key required**.

### 3. Run the frontend

Open another VS Code terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the Vite address shown in the terminal, normally:

```text
http://localhost:5173
```

## Database

The backend connects to MySQL using these development settings:

```text
Host: localhost
Port: 3306
Database: bbpf
User: root
Password: root
```

If your local MySQL uses a different password, update the database settings in `backend/src/server.js`.

## Optional: run everything with Docker

```bash
docker compose up --build
```

This is optional. You can normally develop by running `npm run dev` separately in `backend` and `frontend`.

## Main features

- BBPF responsive public website
- Desktop and mobile navigation
- English / नेपाली language toggle UI
- Search popup
- Donate popup
- Programs
- Our Team
- News & Updates
- Events
- Gallery
- Contact form
- Contact messages stored in MySQL
- React + Vite frontend
- Node.js + Express backend
- No external API key required

Replace `frontend/public/bbpf-logo.png` with the original high-resolution BBPF logo for production use.
