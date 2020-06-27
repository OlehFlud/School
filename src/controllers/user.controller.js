const { userService, historyService, mailService } = require('../services');
const { tokinazer, passwordHashed } = require('../helpers');
const { ErrorHandler, CustomErrors } = require('../errors');
const { RequestHeadersEnum } = require('../constants');
const {
  ActionEnum, HistoryEnum, ResponseStatusCodeEnum, UserStatusEnum,
} = require('../constants');

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

      await mailService.sendEmail(user.email, ActionEnum.USER_REGISTER, { token: accessToken });

      await historyService.createHistory({ event: HistoryEnum.USER_REGISTERED, userId: _id });
      res.sendStatus(ResponseStatusCodeEnum.CREATED);
    } catch (e) {
      console.log(e);

      res.status(500).json({

        error: e,
      });
    }
  },
  confirmUser: async (req, res, next) => {
    try {
      const { _id, status, tokens } = req.user;
      const tokenToDelete = req.get(RequestHeadersEnum.AUTHORIZATION);

      if (status !== UserStatusEnum.PENDING) {
        return next(
          new ErrorHandler(
            ResponseStatusCodeEnum.BAD_REQUEST,
            CustomErrors.BAD_REQUEST_USER_ACTIVATED.message,
            CustomErrors.BAD_REQUEST_USER_ACTIVATED.code,
          ),
        );
      }

      await userService.updateUserByParams({ _id }, { status: UserStatusEnum.CONFIRMED });

      const index = tokens.findIndex(
        ({ action, token }) => token === tokenToDelete && action === ActionEnum.USER_REGISTER,
      );

      if (index !== -1) {
        tokens.splice(index, 1);
        await userService.updateUserByParams({ _id }, { tokens });
      }
      await historyService.createHistory({ event: HistoryEnum.USER_CONFIRMED, userId: _id });

      res.end();
    } catch (e) {
      console.log(e);

      res.status(500).json({

        error: e,
      });
    }
  },
};
