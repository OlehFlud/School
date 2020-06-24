const LessonModel = require('../dataBase/models/lesson');

module.exports = {

  createLesson: (lesson) => {
    const lessonToCreate = new LessonModel(lesson);
    return lessonToCreate.save();
  },

};
