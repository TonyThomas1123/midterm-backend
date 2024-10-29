var express = require('express');
var router = express.Router();

let carsController = require('../controllers/cars');
const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');


/* GET cars listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', carsController.list);
router.post('/create', carsController.create);
router.get('/get/:carID', carsController.carGet, carsController.carByID);

router.delete('/delete/:carID', carsController.delete);

module.exports = router;
