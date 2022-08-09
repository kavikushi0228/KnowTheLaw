const Question = require('../models/QnAModel')


const QnAControllers = {
    getQuestions: async(req, res) =>{
        try {
            const questions = await Question.find()
            res.json(questions)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    createQuestions: async (req, res) =>{
        try {
            const {question} = req.body;
            const Qa = await Question.findOne({question})
            if(Qa) return res.status(400).json({msg: "This question already exists."})
            
            const newQuestion = new Category({question})

            await newQuestion.save()
            res.json({msg: " Question is created."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getAnswers: async(req, res) =>{
        try {
            const answers = await Answer.find()
            res.json(answers)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    createAnswers: async (req, res) =>{
        try {
            const {answer} = req.body;
            const qA = await Question.findOne({answer})
            
            const newAnswer = new Answer({answer})

            await newAnswer.save()
            res.json({msg: " Answer is created."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    deleteAnswer: async(req, res)=>{
        try {
            const qas = await Laws.findOne({qa: req.params.id})
            if(qas) return res.status(400).json({
                msg: "Please delete this answer."
            })
            await Answer.findByIdAndDelete(req.params.id)
            res.json({msg: "Answer is deleted."})
        } catch (err) {
           return res.status(500).json({msg: err.message}) 
        }
    },
    updateAnswer: async(req, res) =>{
        try {
            const {answer} = req.body;
            await Answer.findByIdAndUpdate({_id: req.params.id}, {answer})

            res.json({msg: "Answer updated."})
        } catch (err) {
            return res.status(500).json({msg: err.message}) 
        }
    }

}


module.exports = QnAControllers