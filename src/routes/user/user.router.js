const  router = require('express').Router();
const { userController } = require('../../controllers');
const { checkConfirmTokenMiddleware } = require('../../middlewares')

router.post('/', userController.createUser);
router.post('/confirm', checkConfirmTokenMiddleware, userController.confirmUser);

module.exports = router;
