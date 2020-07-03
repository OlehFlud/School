const LessonModel = require('../dataBase/models/lesson');

module.exports = {

  createLesson: (lesson) => {
    const lessonToCreate = new LessonModel(lesson);
    return lessonToCreate.save();
  },

  updateLessonByParams: (params, update) => LessonModel.updateOne(params, update, { new: true }),

  removeLesson: (removeObject) => LessonModel.findOneAndDelete(removeObject),

  findLessonById: (lessonId) => LessonModel.findById(lessonId),
};
