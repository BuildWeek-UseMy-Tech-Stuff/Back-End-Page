const knex = require('knex');
const knexFile = require("../knexfile");
const enviro = process.env.DB_ENV;

// const config = {
//   client: 'sqlite3',
//   connection: {
//     filename: './data/tech.db3',
//   },
//   useNullAsDefault: true,
// };

module.exports = knex(knexFile[enviro]);