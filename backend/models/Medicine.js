const {Schema, model} = require('mongoose')

const medicineSchema = new Schema(
    {
        name: String,
        commonName: String,
        description: String,
        typeOfMed: {
            type: String,
            enum: ['Coformulado en una tableta', 'No coformulado en una tableta']
        },
        statusOfRec: {
            type: String,
            enum: ['Preferente', 'Alternativo']
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Medicine', medicineSchema)