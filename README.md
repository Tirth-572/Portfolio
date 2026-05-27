# Tirth Vadariya — Full Stack Developer Portfolio

A modern, responsive, animated portfolio website built with **React.js**, **Tailwind CSS**, **Framer Motion**, and a **Node.js + Express.js** backend.

## Features

- Premium dark/light theme with orange gradient accents
- Glassmorphism UI, particle background, typing hero animation
- Animated skills with progress bars
- Project cards with GitHub links
- Achievements & image gallery with modal preview
- Contact form (PostgreSQL + Nodemailer)
- REST APIs for projects, skills, achievements
- Fully responsive (mobile, tablet, desktop)
- SEO optimized meta tags

## Tech Stack

| Frontend | Backend |
|----------|---------|
| React.js (Vite) | Node.js + Express.js |
| Tailwind CSS | PostgreSQL (pg) |
| Framer Motion | Nodemailer |
| React Icons | REST API |

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # Theme context
│   │   ├── data/          # Portfolio static data
│   │   ├── hooks/         # Custom hooks
│   │   └── utils/         # Skill icons helper
│   └── public/images/     # Add your photos here
└── backend/
    ├── config/            # PostgreSQL, Nodemailer
    ├── database/          # schema.sql + pgAdmin guide
    ├── services/
    └── routes/
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (optional, for saving contact messages)

**SSL install error on Windows?** Run `.\install-deps.ps1` or set `$env:NODE_OPTIONS="--use-system-ca"` before `npm install`.

### 1. Install dependencies (one time)

From the **project root** folder:

```powershell
cd "d:\COMPANY WORk\Portfoliyos\Portfoliyo Cursor"
npm run install:all
```

Or install manually in each folder: `frontend` → `backend` → root.

### 2. Environment setup

```powershell
cd backend
copy .env.example .env
# Edit .env with PostgreSQL password (see backend/database/PGADMIN_SETUP.md)
```

**PostgreSQL + pgAdmin 4:** Full setup guide → [`backend/database/PGADMIN_SETUP.md`](backend/database/PGADMIN_SETUP.md)

### 3. Add your images

Place files in `frontend/public/images/`:

- `gallery/certificate.jpg`
- `gallery/gifts.jpg`
- `projects/bidbazaar.jpg`, `lms.jpg`, `instagram.jpg`
- `resume.pdf` in `frontend/public/`

### 4. Run Frontend + Backend together (recommended)

From the **project root**:

```powershell
npm run dev
```

This starts **both** servers in one terminal:

| Service  | URL |
|----------|-----|
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:5000/api |

**Windows shortcut:** double-click or run `start-dev.ps1` (installs deps if missing, then starts both).

### Run separately (optional)

```powershell
# Terminal 1 — Backend only
npm run dev:backend

# Terminal 2 — Frontend only
npm run dev:frontend
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/projects` | List projects |
| GET | `/api/skills` | List skills |
| GET | `/api/achievements` | List achievements |

## Production Build

```bash
cd frontend
npm run build
```

Deploy the `frontend/dist` folder to Vercel/Netlify and the backend to Render/Railway.

## Customize

Update personal details in `frontend/src/data/portfolioData.js` — email, LinkedIn, resume URL, and images.

---

Built with ❤️ by **Tirth Vadariya**
