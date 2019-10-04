const User = require('../models/User')
const nodemailer = require('nodemailer')
const passport = require('passport')

exports.toSignup = async(req, res) => {
    try{
        let user = await User.register(req.body, req.body.password)
        res.status(201).json({user})
    } catch (err){
        res.status(500).json({err})
    }
}

exports.toLogin = (req, res) => {
    const { user } = req;
    res.status(200).json({ user })
}

exports.toLogout = (req, res) => {
    req.logout();
    res.status(200).json({ msg: 'Logged out' })
}

exports.toProfile = async(req, res) => {
    User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
}

exports.toUpdate = async(req, res) => {
    try{
        let user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true })
        res.status(201).json({user})
    } catch (err){
        res.status(500).json({err})
    }
}

// exports.toProfile = (req, res) => {
//     User.findById(req.user._id)
//     .then((user) => res.status(200).json({ user }))
//     .catch((err) => res.status(500).json({ err }));
// }