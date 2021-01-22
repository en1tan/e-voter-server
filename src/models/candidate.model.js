const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  candidateName: {
    type: String,
    required: true,
    unique: true,
  },
  awardId: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  candidateImgUrl: String,
  award: {
    type: Schema.Types.ObjectId,
    ref: 'award',
  },
});

module.exports = mongoose.model('candidate', candidateSchema);
