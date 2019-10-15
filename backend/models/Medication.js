const {Schema, model} = require('mongoose')

const medicationSchema = new Schema(
    {
        med: String,
        frequency: Number,
        startHour: String,
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