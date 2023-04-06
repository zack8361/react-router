const express = require('express');

const router = express.Router();

const { setData } = require('../controllers/dataController');
const { getData } = require('../controllers/dataController');
const { getCounts } = require('../controllers/dataController');
const { plusCounts } = require('../controllers/dataController');

router.post('/setdata', setData);
router.get('/getdata', getData);
//local:4000/data/getdata
router.get('/getcount', getCounts);
router.post('/pluscount', plusCounts);

module.exports = router;
