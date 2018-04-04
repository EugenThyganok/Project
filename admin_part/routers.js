var express = require('express');
var router  = express.Router();

var clientController = require('../controllers/clientController');
var cityController   = require('../controllers/cityController');
var workerController = require('../controllers/workerController');

router.get('/', cityController.index);
router.get('/cities', cityController.cities_list);
router.get('/workers', workerController.workers_list);
router.get('/clients', clientController.clients_list);


//router.get('admin/clients', clientController.clients_list);

//routere.get('admin/workers', workerController.workers_list);



module.exports = router;


/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('index page');
});

module.exports = router;

router.get('/', (req, res) => {
    db.query('select * from cities', (err, response) => {
        if(err) {
            return console.error('Unable to get data from db');
        }
        res.json(response.rows);
    })
})


*/