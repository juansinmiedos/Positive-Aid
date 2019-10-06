const Appointment = require('../models/Appointment')
const nodemailer = require('nodemailer')
const passport = require('passport')

exports.toAddAppointment = async(req, res) => {
    try{
        let dateaux = await new Date(req.body.date)
        const objectaux = await {
            date: dateaux,
            user: req.body.user,
            place: req.body.place,
            typeOfAppointment: req.body.typeOfAppointment,
            withWhom: req.body.withWhom
        }
        
        let appointment = await Appointment.create({...objectaux})
        res.status(201).json({appointment})
    } catch(err){
        res.status(500).json({err})
    }
}

exports.toGetAppointment = async(req, res) => {
    try{
        console.log(req.user._id)
        let allAppointments = await Appointment.find({user: req.user._id})
        res.status(200).json({allAppointments})
    } catch(err){
        res.status(500).json({err})
    }
}

exports.toUpdateAppointment = (req, res) => {
}

exports.toDeleteAppointment = (req, res) => {
}