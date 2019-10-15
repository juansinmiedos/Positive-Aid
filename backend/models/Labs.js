const {Schema, model} = require('mongoose')

const labsSchema = new Schema(
    {
        date: Date,
        cd4: Number,
        cargaViral: Number,
        trigliceridos: Number,
        fnHepatica: Number,
        fnRenal: Number,
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

module.exports = model('Labs', labsSchema)