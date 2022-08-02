const Laws = require('../models/LawModel')


const lawController = {
    getLaws: async(req, res)=>{

        try {
           const laws = await Laws.find()

           res.json(laws)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createLaws: async(req, res)=>{

        try {
            const {law_id,title, type, problem, involvers,description, consultation, solution, category} = req.body;

            const law = await Laws.findOne({law_id})
            if(law)
                return res.status(400).json({msg:"This law already exists."})

            const newLaw = new Laws({
                law_id,title, type, problem, involvers,description, consultation, solution, category
            })
            
            await newLaw.save()
            res.json({msg:"Law has successfully created."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteLaws: async(req, res)=>{

        try {
            await Laws.findByIdAndDelete(req.params._id)
            res.json({msg:"Deleted a law."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateLaws: async(req, res)=>{

        try {
            const {title,type, problem, involvers,description, consultation, solution, category} = req.body;

            await Laws.findByIdAndUpdate({_id:req.params.id},{
                 title,type, problem, involvers,description, consultation, solution, category
            })

            res.json({msg:"Law updated."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = lawController