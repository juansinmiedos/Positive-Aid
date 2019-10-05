const {model, Schema} = require('mongoose')

const appointmentSchema = new Schema(
    {
        place: String,
        typeOfAppointment: {
            type: String,
            enum: ['revision', 'analisis', 'otro']
        },
        withWhom: String,
        date: Date,
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

module.exports = model('Appointment', appointmentSchema)