const router = require('express').Router();
const { lessonController } = require('../../controllers');
const { authMiddleware } = require('../../middlewares');

router.post('/', authMiddleware.CheckAccessTokenMiddleware, lessonController.createLesson);

router.put('/:_id', authMiddleware.CheckAccessTokenMiddleware, lessonController.updateLesson);

router.delete('/:_id', authMiddleware.CheckAccessTokenMiddleware, lessonController.deleteLesson);

module.exports = router;
