const { Types } = require('mongoose');
const UserModel = require('../dataBase/models/user');

module.exports = {

  createUser: (user) => {
    const userToCreate = new UserModel(user);

    return userToCreate.save();
  },

  addActionToken: (userId, tokenObject) => UserModel.update(
    { _id: Types.ObjectId(userId) },
    {
      $push: {
        tokens: tokenObject,
      },
    },
  ),
};
