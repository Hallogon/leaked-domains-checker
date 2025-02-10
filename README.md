# Leaked Domains Checker

Leaked Domains Checker is an open-source web application that allows users to check if a domain has been involved in any data breaches. It utilizes the Twilight Cyber API to fetch leaked credentials related to a given domain.

## Features

- 🔍 **Domain Search**: Users can enter a domain to check for leaked credentials.
- 🃏 **Detailed Leaked Data**: Displays all leaked data in detailed cards.
- 📊 **Data Visualization**: Displays the number of leaked emails, usernames, and passwords in a chart.
- 📚 **Database Insights**: Shows a breakdown of leaks per database source.
- ⚡ **Fast & Secure**: Built using **Next.js** (frontend) and **NestJS** (backend) with Docker support.

---

## 🚀 Getting Started

### 1️⃣ Run with Docker (Recommended)

Ensure you have [Docker](https://www.docker.com/get-started) installed. Clone the repository and go to the root directory.

```sh
# Build and start the services
docker-compose up --build
```

- The **frontend** will be available at: `http://localhost:3000`
- The **API** will be running at: `http://localhost:4444`

To stop the containers:

```sh
docker-compose down
```

### 2️⃣ Run without Docker (Manual Setup)

Ensure you have **Node.js** and **npm** installed.

#### Backend (NestJS API)

```sh
cd api
# Copy the backend env configuration and fill in the .env file with the required API key
cp .env.example .env
npm install
npm run start:dev
```

- API will be running at `http://localhost:4444`

#### Frontend (Next.js)

```sh
cd frontend
# Copy the frontend env configuration
cp .env.example .env
npm install
npm run dev
```

- Frontend will be available at `http://localhost:3000`

---

## 📜 API Endpoints

| Method | Endpoint                        | Description                           |
| ------ | ------------------------------- | ------------------------------------- |
| GET    | `/api/search/leaked-credentials?domain=${your_domain}` | Fetch leaked credentials for a domain |

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: NestJS, TypeScript
- **Database**: None (relies on external API)
- **Containerization**: Docker, Docker Compose

---

## 🛡️ Security Enhancements

- **Helmet**
- **Rate Limiting**
- **CORS**
