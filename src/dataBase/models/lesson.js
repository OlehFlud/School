const studentsSubModel = {
  student1: {
    name: String,
    surname: String,
  },
  student2: {
    name: String,
    surname: String,
  },
  student3: {
    name: String,
    surname: String,
  },
};
const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const { TableNames } = require('../../constants');

const lessonSchema = new mongoose.Schema({
  theme: {
    type: String,
    require: true,
  },
  students: [studentsSubModel],
  classRoom: {
    type: String,
    require: false,
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: TableNames.USERS,
  },
  teacher: Schema.Types.Mixed,

  startTime: {
    type: Number,
    require: false,
  },
  endTime: {
    type: Number,
    require: false,
  },

});

module.exports = mongoose.model(TableNames.LESSON, lessonSchema);
