const Laws = require('../models/LawModel')



class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} 

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(regex)\b/g, match => '$' + match)


       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const lawController = {
    getLaws: async(req, res)=>{

        try {
            const features = new APIfeatures(Laws.find(), req.query)
            .filtering().sorting().paginating()

            const laws = await features.query

            res.json({
                status: 'success',
                result: laws.length,
                laws: laws
            })
            
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