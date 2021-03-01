const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  endpoint: process.env.API_URL,
  'secret': 'meansecure',
  'database': {
    supportBigNumbers: true,
    bigNumberStrings: true,
    host: "localhost",
    user: "root",
    password: "sefusqlsefu",
    database: "codemymobile",
    multipleStatements: true
  }
};