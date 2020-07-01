const router = require('express').Router();
const { lessonController } = require('../../controllers');
const { authMiddleware } = require('../../middlewares');

router.post( '/', authMiddleware.CheckAccessTokenMiddleware, lessonController.createLesson) ;

module.exports = router;
