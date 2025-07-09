# LetMeAsk (API)

**NLW #20 Agents**

**Let Me Ask (API)**: An AI agent that answers user questions in real time.

Basically, it's like having a super-smart robot friend inside your live streaming. You can ask it anything, and it'll try its best to give you a good answer right away. Think of it as a really fast live assistant that tries to understand what you're asking instead of just showing you a bunch of links. It's still learning, but it's pretty good at helping you find information or just answering your random questions!

## Project Setup

This project uses Fastify with TypeScript for creating a fast and scalable server.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Development

To start the server in development mode, run:
```bash
npm run dev
```

The server will run on the port specified in the `.env` file, defaulting to `3333`.

Additionally, to populate the database with initial room data for development or testing, run the following command:
```bash
npm run db:seed
```

### Environment Variables

Make sure to set up the following environment variables in a `.env` file:
- `PORT`: The port for the server. Defaults to `3333`.
- `DATABASE_URL`: The postgreSQL database URL.

### Application Structure

- `src/server.ts`: Main entry point for the Fastify server setup.
- `src/db/connection.ts`: Database connection setup using PostgreSQL.
- `src/env.ts`: Environment configuration using Zod.
- `src/db/seed.ts`: Seeds the database with initial data.
- `src/db/migrations/`: Database migration files.
- `src/db/schema/`: Database schema definitions.
- `src/http/routes/`: Fastify route handlers (e.g., `get-rooms.ts`).

### Features

- Fastify server with CORS enabled.
- Type-safe environment variables using Zod.
- Health check endpoint available at `/health`.
- Database migrations and seeding support.
- Modular route and schema structure.

### Deployment

The server can be deployed using the following command:
```bash
npm start
```

### License

This project is licensed under the WTFPL (Do What The F*ck You Want To Public License).
