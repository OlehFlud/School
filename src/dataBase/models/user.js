const mongoose = require('mongoose');
const { TableNames } = require('../../constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: false,
  },
  email: {
    type: Number,
    require: false,
  },
  password: {
    type: String,
    require: false,
  },

});

module.exports = mongoose.model(TableNames.USERS, userSchema);
