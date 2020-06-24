const mongoose = require('mongoose');
const { lessonService } = require('../services');

const Lesson = require('../dataBase/models/lesson');

module.exports = {
  createUser: async (req, res) => {
    try {
      const lesson = req.body;
      console.log(lesson);
      await lessonService.createLesson(lesson);
      res.json('created');
    } catch (e) {
      console.log(e);
      res.status(500).json({
        error: e,
      });
    }
  },
};
