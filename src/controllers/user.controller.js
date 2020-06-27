const { userService } = require('../services');
const { tokinazer, passwordHashed } = require('../helpers');
const { ActionEnum, ResponseStatusCodeEnum } = require('../constants');

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = req.body;

      user.password = await passwordHashed(user.password);

      const { _id } = await userService.createUser(user);

      const { accessToken } = tokinazer(ActionEnum.USER_REGISTER);

      await userService.addActionToken(
        _id,
        { action: ActionEnum.USER_REGISTER, token: accessToken },
      );

      res.sendStatus(ResponseStatusCodeEnum.CREATED);
    } catch (e) {
      console.log(e);

      res.status(500).json({

        error: e,
      });
    }
  },

};
