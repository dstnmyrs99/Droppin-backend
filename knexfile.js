/* eslint-disable strict */
// Update with your config settings.

require("dotenv").config();

const {DATABASE_URL} = process.env;
module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: './db/migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
