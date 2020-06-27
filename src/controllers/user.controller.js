const { userService } = require('../services');
const { tokinazer, passwordHashed } = require('../helpers');
const { ActionEnum, ResponseStatusCodeEnum } = require('../constants');

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = req.body;

      user.password = await passwordHashed(user.password);

      await userService.createUser(user);

      await tokinazer(ActionEnum.USER_REGISTER);

      res.sendStatus(ResponseStatusCodeEnum.CREATED);
    } catch (e) {
      console.log(e);

      res.status(500).json({

        error: e,
      });
    }
  },


  
};
