const {Schema, model} = require('mongoose')

const medicationSchema = new Schema(
    {
        med: {
            type: Schema.Types.ObjectId,
            ref: 'Medicine'
        },
        frequency: Number,
        startHour: Number
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Medication', medicationSchema)