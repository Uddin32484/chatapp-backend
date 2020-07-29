const exp = require('express');
//const mongoose = require('mongoose');
const router = exp.Router();
const authcontrollar = require('../controllers/auth');

/////

router.post('/register', authcontrollar.CreateUser);
router.post('/login', authcontrollar.LoginUser);


module.exports = router;