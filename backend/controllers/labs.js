const Labs = require('../models/Labs')
const nodemailer = require('nodemailer')
const passport = require('passport')

exports.toAddLabs = async(req, res) => {
    try{
        let dateaux = await new Date(req.body.date)
        const objectaux = await {
            date: dateaux,
            cd4: req.body.cd4,
            cargaViral: req.body.cargaViral,
            trigliceridos: req.body.trigliceridos,
            fnHepatica: req.body.fnHepatica,
            fnRenal: req.body.fnRenal,
            user: req.body.user
        }

        let labs = await Labs.create({...objectaux})
        res.status(201).json({labs})
    } catch (err){
        res.status(500).json({err})
    }
}

exports.toGetLabs = async(req, res) => {
    try{
        let allLabs = await Labs.find({user: req.user._id})
        res.status(200).json({allLabs})
    } catch(err){
        res.status(500).json({err})
    }
}

exports.toUpdateLabs = (req, res) => {
}

exports.toDeleteLabs = async(req, res) => {
    try{
        let deletedLab = await Labs.findByIdAndDelete(req.body.labsid)
        res.status(201).json({deletedLab})
    } catch(err){
        res.status(500).json({err})
    }
}