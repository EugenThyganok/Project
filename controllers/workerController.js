var Worker = require('../Entities/entities.js');
const db    = require('../db/index')

exports.workers_list = (req, res) => {
    db.query('select * from workers', (error, response) => {
        if(error) {
            return console.error('Unable to fetch data from database');
        }
        res.json(response.rows);
    })    
}

exports.worker_remove = (req, res) => {
    res.send('not implemented yet, workers');
}

exports.worker_add = (req, res) => {
    res.send('not implemented, workers');
}

exports.worker_change_name = (req, res) => {
    res.send('not implemented, workers');
}