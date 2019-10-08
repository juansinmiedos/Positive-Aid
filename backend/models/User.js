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
        status: {
            type: String,
            enum: ['Detectable', 'Indetectable', 'SIDA'],
            default: 'Detectable'
        },
        confirmationStatus: {
            type: String,
            enum: ['Pending Confirmation', 'Active'],
            default: 'Pending Confirmation'
        },
        confirmationCode: {
            type: String,
            unique: Boolean
        },
        profilePhoto: {
            type: String,
            default: 'https://cdn11.bigcommerce.com/s-bda933q48z/images/stencil/1280x1280/products/119/477/Two-Color_Bloom_Handmade_Tile__28047.1496937781.png?c=2&imbypass=on'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.plugin(PLM)
module.exports = model('User', userSchema)