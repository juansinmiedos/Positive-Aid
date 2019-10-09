const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const passport = require('../config/passport')
const isAuth = require('../middlewares/isAuth')
// REQUIRE CONTROLLERS
const {toLogin, toLogout, toProfile, toSignup, toUpdate, toConfirm} = require('../controllers/index')
const {toAddLabs, toDeleteLabs, toGetLabs, toUpdateLabs} = require('../controllers/labs')
const {toAddAppointment, toDeleteAppointment, toGetAppointment, toUpdateAppointment} = require('../controllers/appointments')
const {toAddMedication, toDeleteMedication, toGetMedication, toUpdateMedication} = require('../controllers/medication')
const {toCapacits} = require('../controllers/capacits')
const {toMedicines} = require('../controllers/medicines')


// AUTHENTICATION ROUTES
router.post('/signup', toSignup)
router.post('/login', passport.authenticate('local'), toLogin)
router.get('/logout', toLogout)
router.get('/profile', isAuth, toProfile)
router.put('/update', toUpdate)
router.get('/confirm/:id', toConfirm)

// LABS ROUTES
router.post('/labs', toAddLabs)
router.get('/labs', toGetLabs)
router.put('/labs', toUpdateLabs)
router.delete('/labs', toDeleteLabs)

// MEDICATION ROUTES
router.post('/medication', toAddMedication)
router.get('/medication', toGetMedication)
router.put('/medication', toUpdateMedication)
router.delete('/medication', toDeleteMedication)

// APPOINTMENTS ROUTES
router.post('/appointment', toAddAppointment)
router.get('/appointment', toGetAppointment)
router.put('/appointment', toUpdateAppointment)
router.delete('/appointment', toDeleteAppointment)

// CAPACITS ROUTES
router.get('/capacits', toCapacits)

// MEDICINES ROUTES
router.get('/medicines', toMedicines)

module.exports = router;
