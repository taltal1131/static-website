# 🌐 Static Website with CI/CD and Docker

This is a static HTML/CSS website served via Nginx, containerized with Docker, and deployed to Render with a full CI/CD pipeline.

---

## ✅ Tech Stack

- 🖼️ HTML + CSS – Static frontend
- 🐳 Docker + Nginx – Containerized serving
- ⚙️ GitHub Actions – CI/CD pipeline
- 📦 DockerHub – (Optional) image registry
- 🚀 Render – Deployment platform

---

## 🔗 Live Demo

👉 [View Website](https://static-website-emi3.onrender.com/)

---

## 📁 Folder Structure

static-website/
├── index.html
├── style.css
├── Dockerfile
└── .github/workflows/deploy.yml

---

## 📦 Docker Commands

```bash
docker build -t taltal1131/static-website .
docker run -p 80:80 taltal1131/static-website
🚀 CI/CD Flow
Push to main branch triggers GitHub Actions

Docker Image is built

(Optional) Image is pushed to DockerHub

Deploy manually or via Render

💡 Project Goal
To demonstrate a basic CI/CD pipeline with static content and Dockerized infrastructure.

---

## 📝 2. README לפרויקט `backend` (Node.js API)

```markdown
# 🧠 Simple Node.js Backend with Docker & CI/CD

This is a minimal Express.js API running inside Docker, with CI/CD pipeline to DockerHub, and deployment to Render.

---

## ✅ Tech Stack

- 🚀 Node.js + Express – REST API
- 🐳 Docker – Containerized service
- ⚙️ GitHub Actions – CI/CD pipeline to DockerHub
- 🛳️ Render – Deployed container
- 📦 DockerHub – Backend Image Registry

---

## 🔗 Live Demo

👉 [API – Hello Route](https://backend-app-bts9.onrender.com/api/hello)

👉 [API Root](https://backend-app-bts9.onrender.com/)

---

## 📁 Folder Structure

static-website/
├── backend/
│ ├── server.js
│ ├── package.json
│ ├── Dockerfile
│ └── ...

---

## 📦 Docker Commands

```bash
cd backend
docker build -t taltal1131/backend-app .
docker run -p 3000:3000 taltal1131/backend-app
🚀 CI/CD Flow
Push to backend/** triggers GitHub Actions

Docker Image is built and pushed to DockerHub:

taltal1131/backend-app
Image can be deployed manually or via Render

📌 API Endpoints
Method	Path	Description
GET	/	Returns "Backend is running"
GET	/api/hello	Returns JSON greeting

🎯 Project Goal
To demonstrate a working REST API in Docker, with CI/CD and cloud deployment.
