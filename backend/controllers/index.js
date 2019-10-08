const User = require('../models/User')
const nodemailer = require('nodemailer')
const passport = require('passport')


exports.toSignup = async(req, res) => {
    try{

        const {name, lastname, username, email, status, confirmationStatus, profilePhoto} = req.body
        const password = req.body.password

        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

        let confirmationCode = ''
        
        for (let i = 0; i < 25; i++){confirmationCode += characters[Math.floor(Math.random() * characters.length)]}

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })

        await User.findOne({ email }, 'email', (err, user) => {
            if (user !== null) {
                return res.status(401).json({ message: 'Esta cuenta de correo ya está registrada.' })
            } else {

                transporter.sendMail({
                    from: `+aid - Una plataforma para ayudarte a vivir mejor. <${process.env.EMAIL}>`,
                    to: email,
                    subject: 'Confirma tu cuenta',
                    html: `
                    <a href="${req.headers.origin}/confirmar-cuenta/${confirmationCode}"><p>Clic aquí para verificar cuenta</p></a>
                    `
                })
    
                User.register(new User({name, lastname, username, email, status, confirmationStatus, confirmationCode, profilePhoto}),
                password, (err, account) => err ? res.json({err}) : res.status(201).json({account}))
            }
        })
    } catch (err){
        res.status(500).json({err})
    }
}

exports.toConfirm = (req, res, next) => {
    
    console.log(req.params.id)

    User.find({ confirmationCode: req.params.id }).then(user => {
        let id = user[0]._id
    
        User.findByIdAndUpdate(id, { confirmationStatus: 'Active' }, function(err, result) {
            if (err) {
                res.status(401).json({ err })
            }
            let userEmail = user[0].email
            let userId = user[0]._id
            res.status(201).json({ userEmail, userId })
        })
    })
}

exports.toLogin = (req, res, next) => {
    console.log('entra al controller tologin')
    passport.authenticate('local', (err, user) => {
        if (err) {
            return res.status(401).json({ err })
        }
        if (!user) {
            return res.status(401).json({ err })
        }

        req.logIn(user, err => {
            if (err) {
                return res.status(401).json({ err })
            }
            if (user.confirmationStatus === 'Pending Confirmation') {
                return res.status(401).json({ message: 'Por favor verifica tu cuenta' })
            }
            return res.status(200).json({user})
        })
    })(req, res, next)
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