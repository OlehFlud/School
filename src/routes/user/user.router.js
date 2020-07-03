const router = require('express').Router();
const { userController } = require('../../controllers');
const { userMiddleware, tokenMiddleware } = require('../../middlewares');

router.post('/',
  userMiddleware.checkIsUserValidMiddleware,
  userMiddleware.checkIsUserEmailExistMiddleware,
  userController.createUser);

router.post('/confirm', tokenMiddleware.checkConfirmTokenMiddleware, userController.confirmUser);

router.put('/:_id', userController.updateUser);


module.exports = router;
