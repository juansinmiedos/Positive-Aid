const Capacits = require('../models/Capacits')

exports.toCapacits = async(req, res) => {
    try{
        let capacits = await Capacits.find()
        res.status(201).json({capacits})
    } catch (err){
        res.status(500).json({err})
    }
}
