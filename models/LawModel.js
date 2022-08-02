const mongoose = require('mongoose')


const lawSchema = new mongoose.Schema({
    law_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    type:{
        type: String,
        trim: true,
        required: true
    },
    problem:{
        type: String,
        trim: true,
        required: true
    },
    involvers:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    consultation:{
        type: String,
        required: true
    },
    solution:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
}, {
    timestamps: true 
})


module.exports = mongoose.model("Laws", lawSchema)