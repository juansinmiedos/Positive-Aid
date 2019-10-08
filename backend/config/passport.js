const passport = require('passport')
const User = require('../models/User')

console.log('entra al config de passport')

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

module.exports = passport