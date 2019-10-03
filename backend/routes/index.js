const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const passport = require('../config/passport')
const {toLogin, toLogout, toProfile, toSignup, toUpdate} = require('../controllers/index')
const {toCapacits} = require('../controllers/capacits')
const {toMedicines} = require('../controllers/medicines')
const isAuth = require('../middlewares/isAuth')

// AUTHENTICATION ROUTES
router.post('/signup', toSignup)
router.post('/login', passport.authenticate('local'), toLogin)
router.get('/logout', toLogout)
router.get('/profile', isAuth, toProfile)
router.put('/update', toUpdate)

// CAPACITS ROUTES
router.get('/capacits', toCapacits)

// MEDICINES ROUTES
router.get('/medicines', toMedicines)

module.exports = router;
