const {Schema, model} = require('mongoose')

const capacitsSchema = new Schema(
    {
        name: String,
        state: String,
        responsible: String,
        medicalSpeciality: String,
        email: String,
        hours: String,
        address: String,
        location: {
            type: {
                type: String,
                default: 'Point'
            },
            coordinates: [Number]
        },
        phones: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

capacitsSchema.index({location: "2dsphere"})
module.exports = model('Capacits', capacitsSchema)