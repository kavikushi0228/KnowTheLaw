const router = require('express').Router()
const lawController = require('../controllers/lawControllers')

router.route('/laws')
    .get(lawController.getLaws)
    .post(lawController.createLaws)

router.route('/laws/:id')
    .delete(lawController.deleteLaws)
    .put(lawController.updateLaws)

module.exports = router