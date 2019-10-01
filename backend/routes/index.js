const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const passport = require('../config/passport')
const {toLogin, toLogout, toProfile, toSignup} = require('../controllers/index')
const isAuth = require('../middlewares/isAuth')

router.post('/signup', toSignup)
router.post('/login', passport.authenticate('local'), toLogin)
router.get('/logout', toLogout)
router.get('/profile', isAuth, toProfile)

module.exports = router;
