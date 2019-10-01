const {model, Schema} = require('mongoose')

const appointmentSchema = new Schema(
    {
        name: String,
        place: String,
        typeOfAppointment: {
            type: String,
            enum: ['revision', 'analisis', 'otro']
        },
        withWhom: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Appointment', appointmentSchema)