var Client = require('../Entities/entities.js');
const db    = require('../db/index')

exports.clients_list = (req, res) => {
    db.query('select * from clients', (error, response) => {
        if(error) {
            return console.error('Unable to fetch data from database');
        }
        res.json(response.rows);
    })    
}

exports.clients_remove = (req, res) => {
    res.send('not implemented yet, clients');
}

exports.clients_add = (req, res) => {
    res.send('not implemented, clients');
}

exports.clients_change_name = (req, res) => {
    res.send('not implemented, clients');
}