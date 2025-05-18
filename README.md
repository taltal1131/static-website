# 🌐 Full DevOps Project: Static Website + Backend API with CI/CD

This project demonstrates a full DevOps flow with:

- A static frontend (HTML + CSS) served via Nginx
- A backend API (Node.js + Express)
- Dockerized services
- CI/CD via GitHub Actions
- Deployment to the cloud using Render

---

## 🧱 Tech Stack

| Layer     | Technology                       |
|-----------|----------------------------------|
| Frontend  | HTML + CSS + Nginx               |
| Backend   | Node.js + Express                |
| DevOps    | Docker, Docker Compose           |
| CI/CD     | GitHub Actions                   |
| Registry  | DockerHub                        |
| Deployment | Render                          |

---

## 📁 Project Structure

static-website/
├── index.html
├── style.css
├── Dockerfile # Frontend (Nginx)
├── backend/
│ ├── server.js
│ ├── package.json
│ └── Dockerfile # Backend (Express)
├── docker-compose.yml
└── .github/
└── workflows/
├── deploy.yml # Frontend CI/CD
└── deploy-backend.yml # Backend CI/CD

---

## 🌐 Live URLs

- **Frontend (Static Website):**  
  🔗 [https://static-website-emi3.onrender.com](https://static-website-emi3.onrender.com)

- **Backend API:**  
  🔗 [https://backend-app-bts9.onrender.com/api/hello](https://backend-app-bts9.onrender.com/api/hello)

---

## 🔌 API Endpoints

| Method | Path           | Description                  |
|--------|----------------|------------------------------|
| GET    | `/`            | Root message                 |
| GET    | `/api/hello`   | Returns a JSON greeting      |

---

## 🚀 CI/CD Overview

✅ GitHub Actions automatically builds and deploys:

- **Frontend:**  
  `index.html + Dockerfile` → build & deploy on push to `main`

- **Backend:**  
  Pushes Docker image to DockerHub on changes in `backend/**`

📦 Images:
- `taltal1131/static-website`
- `taltal1131/backend-app`

---

## 🐳 Docker Local Commands

```bash
# Frontend
docker build -t taltal1131/static-website .
docker run -p 80:80 taltal1131/static-website

# Backend
cd backend
docker build -t taltal1131/backend-app .
docker run -p 3000:3000 taltal1131/backend-app

# Combined
docker compose up --build
🎯 Goal
To showcase a working DevOps pipeline with full stack components using Docker, GitHub Actions, and Render deployment.

---

## 🧾 commit message מומלץ:

```bash
git add README.md
git commit -m "Docs: add unified README for frontend and backend with CI/CD and deployment"
git push origin main
