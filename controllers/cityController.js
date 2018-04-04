var City = require('../Entities/entities.js');
const db    = require('../db/index')

exports.cities_list = (req, res) => {
    db.query('select * from cities', (error, response) => {
        if(error) {
            return console.error('Unable to fetch data from database');
        }
      //  res.send(response.rows[0]);
       // console.log(());
       // res.render('cities', {city : response.rows[0]});
        res.send(response.rows[0])
    })    
}
//res.render('index', { title: 'Express' });

exports.index = (req, res) => {
    res.send("this is admin pannel");
}

exports.cities_remove = (req, res) => {
    res.send("not implemented, cities");
}

exports.cities_add = (req, res) => {
    res.send("not implemented, cities");
}

exports.cities_change_name = (req, res) => {
    res.send("not implemented, cities");
}