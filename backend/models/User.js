const {Schema, model} = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
    {
        name: String,
        lastname: String,
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        sex: {
            type: String,
            enum: ['male', 'female'],
        },
        status: {
            type: String,
            enum: ['Detectable', 'Indetectable', 'SIDA']
        },
        profilePhoto: {
            type: String,
            default: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
        },
        cd4: [Number],
        cargaViral: [Number],
        trigliceridos: [Number],
        fnHepatica: [Number],
        fnRenal: [Number],
        appointments: [{
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }],
        medicine: [{
            type: Schema.Types.ObjectId,
            ref: 'Medicine'
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.plugin(PLM)
module.exports = model('User', userSchema)