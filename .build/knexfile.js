"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
require("dotenv/config");
const config = {
    development: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        searchPath: ['knex', 'public'],
        migrations: {
            directory: './src/config/database/knex/migrations'
        }
    }
};
exports.default = config;
