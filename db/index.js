const { Pool } = require('pg');

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'clockwise',
    password : '',
    post : 5432
});

pool.connect();

module.exports = {
    query : (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}