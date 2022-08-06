const router = require('express').Router()
const lawController = require('../controllers/lawControllers')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/laws')
    .get(lawController.getLaws)
    .post(auth, authAdmin, lawController.createLaws)

router.route('/laws/:id')
    .delete(auth, authAdmin,lawController.deleteLaws)
    .put(auth, authAdmin,lawController.updateLaws)

module.exports = router