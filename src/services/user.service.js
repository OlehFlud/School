const UserModel = require('../dataBase/models/user');

module.exports = {

  createUser: (user) => {
    const userToCreate = new UserModel(user);
    return userToCreate.save();
  },

};
