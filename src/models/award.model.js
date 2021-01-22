const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const awardSchema = new Schema({
  awardName: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model('award', awardSchema);
