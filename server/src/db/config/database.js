require('dotenv').config();

module.exports = {
    development: {
        username: 'sitael',
        password: 123,
        database: 'finally',
        host: process.env.HOST,
        dialect: 'postgres',
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};
