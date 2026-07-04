# CodePulse AI – Setup Guide

CodePulse AI is an AI-powered static code analysis system that analyzes source code and generates:

* Bug Score
* Logic Score
* Performance Score
* Maintainability Score
* Overall Code Health Score

The project consists of:

* **Frontend** → React + Vite
* **Backend** → Node.js + Express
* **AI Engine** → Gemini-powered analysis pipeline

---

# Prerequisites

Install the following:

* Node.js (v18+ recommended)
* npm
* Git
* Gemini API Key

Check installation:

```bash
node -v
npm -v
git --version
```

---

# Clone Repository

```bash
git clone https://github.com/paveethraabalasubramanium-dotcom/CODE_REVIEW.git
cd CODE_REVIEW
```

---

# Project Structure

```text
CODE_REVIEW/
│
├── backend/
│   ├── src/
│   │   ├── ai/
│   │   ├── ai_v2/
│   │   ├── analyzer/
│   │   ├── api/
│   │   ├── core/
│   │   ├── engine/
│   │   ├── pipeline/
│   │   ├── pipeline_v2/
│   │   ├── utils/
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── engine/
│   │   ├── services/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Backend Setup

Go to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file inside backend:

```env
GEMINI_API_KEY=your_api_key_here
PORT=5000
```

Run backend:

Development:

```bash
npm run dev
```

OR

Production:

```bash
npm start
```

Backend runs at:

```text
http://localhost:5000
```

---

# Frontend Setup

Open new terminal.

Go to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# Production Build

Frontend build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

# Features

* Multi-language source code analysis
* AI-powered issue detection
* Static bug detection
* Logic validation
* Time complexity analysis
* Maintainability scoring
* Detailed issue explanation panel

---

# Important Notes

* Backend must be started before frontend.
* Gemini API key is required for AI analysis.
* If API quota is exceeded, analysis may fail.
* Do not commit `.env` files containing API keys.
