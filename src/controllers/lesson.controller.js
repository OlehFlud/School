const { lessonService, historyService } = require('../services');
const { HistoryEnum } = require('../constants');

module.exports = {
  createLesson: async (req, res) => {
    try {
      const { _id, name, surname } = req.user;

      const lesson = req.body;

      const newLesson = await lessonService.createLesson({
        ...lesson,
        userId: _id,
        teacher: {
        // eslint-disable-next-line no-underscore-dangle
          TeacherName: name,
          TeacherSurname: surname,
        },
      });

      await historyService.createHistory({
        userId: _id,
        event: HistoryEnum.LESSON_CREATED,
        data: {
          // eslint-disable-next-line no-underscore-dangle
          lessonId: newLesson._id,
          title: newLesson.theme,
        },
      });

      res.json(newLesson);
    } catch (e) {
      console.log(e);
      res.status(500).json({
        error: e,
      });
    }
  },
};
