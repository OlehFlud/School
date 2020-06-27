const { ActionEnum } = require('../constants');

module.exports.htmlTemplate = {
  [ActionEnum.USER_REGISTER]: {
    subject: 'Hello',
    templateFileName: 'user-welcome',
  },
  [ActionEnum.FORGOT_PASSWORD]: {
    subject: 'You forgot the password',
    templateFileName: 'forgot-password',
  },
};
