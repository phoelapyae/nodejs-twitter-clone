const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    handle: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 6
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Enter validate email!')
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        trim: true,
        validate(value) {
            if (value.includes('password')) {
                throw new Error("Please remove 'password'.")
            }
        }
    },
    followers: {
        type: Array
    },
    following: {
        type: Array
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User