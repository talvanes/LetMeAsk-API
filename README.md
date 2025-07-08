
# LetMeAsk-API

NLW #20 Agents Let Me Ask (API): Agente de IA que responde as perguntas da galera em tempo real.

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

### Environment Variables

Make sure to set up the following environment variables in a `.env` file:
- `PORT`: The port for the server. Defaults to `3333`.
- `DATABASE_URL`: The postgreSQL database URL.

### Application Structure

- `src/server.ts`: Main entry point for the Fastify server setup.
- `src/db/connection.ts`: Database connection setup using PostgreSQL.
- `src/env.ts`: Environment configuration using Zod.

### Features

- Fastify server with CORS enabled.
- Type-safe environment variables using Zod.
- Health check endpoint available at `/health`.

### Deployment

The server can be deployed using the following command:
```bash
npm start
```

### License

This project is licensed under the ISC License.
