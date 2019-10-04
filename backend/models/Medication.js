const {Schema, model} = require('mongoose')

const medicationSchema = new Schema(
    {
        med: {
            type: String,
            enum: ['yet to be defined']
        },
        frequency: Number,
        startHour: Number,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Medication', medicationSchema)