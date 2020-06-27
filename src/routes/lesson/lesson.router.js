const router = require('express').Router();
const { lessonController } = require('../../controllers');

router.post( '/', lessonController.createLesson) ;

module.exports = router;
