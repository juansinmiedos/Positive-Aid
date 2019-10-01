const {Schema, model} = require('mongoose')

const medicineSchema = new Schema(
    {
        name: String,
        commonName: String,
        description: String,
        frequency: Number,
        startHour: Number
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Medicine', medicineSchema)