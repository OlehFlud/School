const HistoryModel = require('../dataBase/models/history');

module.exports = {
  createHistory: (history) => {
    const historyToCreate = new HistoryModel(history);

    return historyToCreate.save();
  },
};
