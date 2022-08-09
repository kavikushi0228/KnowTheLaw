const Payment = require('../models/paymentModel')


const paymentControllers = {
    getPayments: async(req, res) =>{
        try {
            const payments = await Payment.find()
            res.json(payments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    createPayment: async (req, res) =>{
        try { 
            const user = await Users.findById(req.user.id).select('name email');
            if(!user) return res.status(400).json({msg: "This user does not exists."})

            const{paymentID} = req.body;
            const{_id,name,email} = user;

            const newPayment = new Payment({
                user_id:_id,name,email,paymentID
            })
            

            await newPayment.save()
            res.json({msg: " payment is succes."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
moduleexports = paymentControllers
