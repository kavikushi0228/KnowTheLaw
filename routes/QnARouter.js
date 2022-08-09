const router = require('express').Router()
const QnAControllers = require('../controllers/QnAControllers')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/question')
    .get(QnAControllers.getQuestions)
    .post(auth, authAdmin, QnAControllers.createQuestions)

router.route('/answer')
    .get(QnAControllers.getAnswers)
    .post(auth, authAdmin, QnAControllers.createAnswers)
    

router.route('/answer/:id')
    .delete(auth, authAdmin, QnAControllers.deleteAnswer)
    .put(auth, authAdmin, QnAControllers.updateAnswer)



    module.exports = router