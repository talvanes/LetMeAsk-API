# LetMeAsk (API)

**NLW #20 Rocketseat – Agents Edition**

LetMeAsk (API) is a modern, scalable backend service built during the NLW #20 Rocketseat event (July 2025), focused on real-time Q&A for live streaming and interactive platforms. This project leverages the latest Node.js ecosystem, TypeScript, and best practices in backend design, providing a robust API for managing rooms and questions, powered by PostgreSQL and Drizzle ORM.

## 🚀 About NLW #20 Rocketseat

This project was developed as part of the NLW (Next Level Week) #20 event by Rocketseat, themed "Agents". The event brings together thousands of developers to build innovative, production-ready applications using cutting-edge technologies and modern software engineering practices.

## 🛠️ Tech Stack

- **Node.js** (v18+)
- **TypeScript**
- **Fastify** (high-performance HTTP server)
- **PostgreSQL** (relational database)
- **Drizzle ORM** (type-safe SQL ORM)
- **Zod** (runtime schema validation)
- **Docker** (for local development and database)
- **CORS** (secure cross-origin requests)

## 🏗️ Design & Architecture

- **Modular Structure:** Clear separation of concerns (routes, schema, migrations, seed, env, etc.)
- **Type Safety:** End-to-end type safety using TypeScript and Zod
- **Environment Management:** All config via `.env` and validated with Zod
- **Database Migrations & Seeding:** Versioned migrations and easy seeding for reproducible environments
- **RESTful API:** Organized route handlers under `src/http/routes/`
- **Health Check:** `/health` endpoint for monitoring

## 📁 Project Structure

- `src/server.ts` – Fastify server entry point
- `src/env.ts` – Environment variable validation
- `src/db/connection.ts` – PostgreSQL connection via Drizzle
- `src/db/seed.ts` – Database seeding script
- `src/db/migrations/` – SQL migration files
- `src/db/schema/` – Drizzle ORM schema definitions
- `src/http/routes/` – API route handlers (e.g., `get-rooms.ts`)

## ⚙️ Getting Started

### Prerequisites
- Node.js v18 or higher
- npm
- Docker (for local PostgreSQL)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy and configure your environment variables:
   ```bash
   cp .env.example .env
   # Edit .env as needed
   ```
4. Start the PostgreSQL database with Docker:
   ```bash
   docker-compose up -d
   ```
5. Run database migrations:
   ```bash
   npm run db:migrate
   ```
6. (Optional) Seed the database:
   ```bash
   npm run db:seed
   ```

### Development

Start the development server:
```bash
npm run dev
```
The server will run on the port specified in `.env` (default: 3333).

### Deployment

Build and start the server for production:
```bash
npm run build
npm start
```

## 🔑 Environment Variables

Create a `.env` file with:
- `PORT` – Server port (default: 3333)
- `DATABASE_URL` – PostgreSQL connection string

## 🧩 Features

- Real-time Q&A API for live streaming
- Modular, type-safe backend
- Health check endpoint (`/health`)
- Database migrations and seeding
- Secure CORS configuration
- Ready for Dockerized environments

## 📚 Example API Endpoints

- `GET /health` – Health check
- `GET /rooms` – List all rooms
- (Extend with more endpoints as needed)

## 🤝 Contributing

Pull requests and issues are welcome! This project is a learning resource and a foundation for further development.

## 📜 License

This project is licensed under the [WTFPL](LICENSE) (Do What The F*ck You Want To Public License).

---

Built with ❤️ during NLW #20 by Rocketseat and the open source community.
