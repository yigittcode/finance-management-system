const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  month: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  income: {
    type: Number,
    default: 0
  },
  expense: {
    type: Number,
    default: 0
  },
  categoryReports: [{
    category: String,
    income: Number,
    expense: Number
  }]
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema); 