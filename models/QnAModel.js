const mongoose = require('mongoose')

const QnASchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    answer_id:{
        type: String,
        required: true,
        trim: true,
        required: true

    },
    answer:{
        type: String,
        required: true,

    }
},{

        timestamps: true
})

module.exports = mongoose.model("QnA", QnASchema)