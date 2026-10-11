# PlantPulse

PlantPulse is a full-stack plant care and management platform consisting of a Node.js/Express backend service and a React frontend application.

---

## Architecture Overview

- **Backend:** Node.js, Express, MongoDB (Port: `1000`)
- **Frontend:** React, Tailwind CSS (Port: `3000`)

---

## Prerequisites

Ensure the following tools are installed on your environment:

- **Node.js** (v16 or higher)
- **Yarn** package manager
- **MongoDB** instance (MongoDB Atlas or local deployment)

Install Yarn globally if not already installed:
```bash
npm install --global yarn
```

---

## Installation and Execution

Two separate terminal sessions are required to run the services simultaneously.

### 1. Backend Service Setup

Navigate to the backend directory:
```bash
cd backend
```
*(From repository root: `cd PlantPulse/backend`)*

Install dependencies:
```bash
yarn
```

Configure environment variables in `backend/.env`:
```env
PORT=1000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.e2bw5nd.mongodb.net/plantCare471?retryWrites=true&w=majority
```

Start the backend server:
```bash
node server.js
```

Expected output:
```text
Server running on port 1000
Connected to MongoDB
```

---

### 2. Frontend Application Setup

In a new terminal session, navigate to the frontend directory:
```bash
cd frontend
```
*(From repository root: `cd PlantPulse/frontend`)*

Install dependencies:
```bash
yarn
```

Start the frontend development server:
```bash
yarn start
```

Access the application in your browser:
```text
http://localhost:3000
```

---

## Termination

To stop either service, terminate the process in the active terminal window:
```bash
Ctrl + C
```
