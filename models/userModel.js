const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique:true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: Number,
        default: 0
    },

    name: {
        type: String,
        required: true,
        trim:true
    },
    images: {
        type: Object,
        required: true
    }
},{
        timestamps: true
    })

module.exports = mongoose.model('Users', userSchema)