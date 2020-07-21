# Description

My work-in-progress node API boilerplate for open source projects. Using typescript and Node Middleware pattern. Based on/Improvement of
[Nether-API](https://github.com/Tuistmessiah/nether-api)

Features:

- Configuration and tests for PostgreSQL
- Pre-defined ACRUD service (All + CRUD)
- Dynamic query builder
- Sample static queries and admin commands to reset and populate DB
- Example of endpoints and routers
- Environment variables set up

# Start

## Installation

Install dependencies and add your local DB values in `.env` or create a new `.env.local`. After installing your local postgres database, set the `create-example-sql` and `populate-example.sql` queries for your data structure. Run `configure_db.ts` (`npm run db:configure`) to drop any old DB and create a new one (named `postgres`).

## Run

Run `npm run start` to run node server in default localhost:5000 (this PORT can be changed in the `.env` file).

## Build

Run `npm run build`. It will generate a `built` folder

# On going

TO DOs:

- Basic Security
- Frontend Certificate (for development whilst the API being served online)
- Authentication
- Email service
- Socket sub-boilerplate
- GraphQL sub-boilerplate
