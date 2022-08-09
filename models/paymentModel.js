const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    
    paymentID: {
        type: String,
        required: true,
        
    },

    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },


    user_id:{
        type: String,
        required:true,
        
    }

},{
        timestamps: true
    })

module.exports = mongoose.model('Payments', paymentSchema)