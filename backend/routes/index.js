const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const passport = require('../config/passport')
const {toLogin, toLogout, toProfile, toSignup} = require('../controllers/index')
const {toCapacits} = require('../controllers/capacits')
const isAuth = require('../middlewares/isAuth')

// AUTHENTICATION ROUTES
router.post('/signup', toSignup)
router.post('/login', passport.authenticate('local'), toLogin)
router.get('/logout', toLogout)
router.get('/profile', isAuth, toProfile)

// CAPACITS ROUTES
router.get('/capacits', toCapacits)

module.exports = router;
