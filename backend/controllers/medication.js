const Medication = require('../models/Medication')
const nodemailer = require('nodemailer')
const passport = require('passport')

exports.toAddMedication = async(req, res) => {
    try{
        let medication = await Medication.create({...req.body})
        res.status(201).json({medication})
    } catch(err){
        res.status(500).json({err})
    }
}

exports.toGetMedication = (req, res) => {
}

exports.toUpdateMedication = (req, res) => {
}

exports.toDeleteMedication = (req, res) => {
}