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

exports.toGetMedication = async(req, res) => {
    try{
        let allMeds = await Medication.find({user: req.user._id})
        res.status(200).json({allMeds})
    } catch(err){
        res.status(500).json({err})
    }
}

exports.toUpdateMedication = (req, res) => {
}

exports.toDeleteMedication = (req, res) => {
}