const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const { TableNames } = require('../../constants');

const HistorySchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  data: Schema.Types.Mixed,
}
, {
  timestamps: true,
});
module.exports = mongoose.model(TableNames.HISTORY, HistorySchema);
