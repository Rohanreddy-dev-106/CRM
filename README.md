# CRM Backend

A robust Customer Relationship Management (CRM) REST API built with Node.js and Express, following a clean layered architecture.

---

## 🗂️ Project Structure

```
CRM/
├── src/
│   ├── config/          # Database and environment configuration
│   ├── controllers/     # Route handlers and request/response logic
│   ├── models/          # Database models / schemas
│   ├── repo/            # Data access layer (repository pattern)
│   ├── routers/         # Express route definitions
│   ├── service/         # Business logic layer
│   └── utils/           # Helper functions and utilities
├── .env.example         # Environment variable template
├── .gitignore
├── index.js             # Application entry point
├── package.json
├── package-lock.json
└── server.js            # Express server setup
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rohanreddy-dev-106/CRM-1.git
   cd CRM-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in the required values in your `.env` file.

4. **Start the server**
   ```bash
   node index.js
   ```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and update the values:

```env
PORT=your_port
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

---

## 🏛️ Architecture

This project follows a layered architecture to keep concerns separated and the codebase maintainable:

| Layer | Folder | Responsibility |
|---|---|---|
| Router | `routers/` | Defines API endpoints and maps them to controllers |
| Controller | `controllers/` | Handles HTTP requests and responses |
| Service | `service/` | Contains business logic |
| Repository | `repo/` | Handles all database interactions |
| Model | `models/` | Defines data schemas/models |
| Config | `config/` | App and database configuration |
| Utils | `utils/` | Shared helper functions |

---

## 📦 Scripts

```bash
# Start the server
node index.js

# Install dependencies
npm install
```

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Architecture:** Layered (Router → Controller → Service → Repository → Model)
