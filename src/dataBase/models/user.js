const mongoose = require('mongoose');
const { TableNames, UserStatusEnum } = require('../../constants');

const tokenSubModel = {
  token: String,
  action: String,
};
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
  status: {
    type: String,
    required: true,
    default: UserStatusEnum.PENDING,
  },
  tokens: [tokenSubModel],

}, {
  timestamp: true,
});

module.exports = mongoose.model(TableNames.USERS, userSchema);
