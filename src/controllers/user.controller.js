const { userService, historyService } = require('../services');
const { tokinazer, passwordHashed } = require('../helpers');
const { ActionEnum, HistoryEnum, ResponseStatusCodeEnum } = require('../constants');

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

      await historyService.createHistory({ event: HistoryEnum.USER_REGISTERED, userId: _id });

      res.sendStatus(ResponseStatusCodeEnum.CREATED);
    } catch (e) {
      console.log(e);

      res.status(500).json({

        error: e,
      });
    }
  },

};
