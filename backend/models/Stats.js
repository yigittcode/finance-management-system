import mongoose from 'mongoose';

const statsSchema = new mongoose.Schema({
  totalUsers: {
    type: Number,
    default: 0
  },
  totalTransactions: {
    type: Number,
    default: 0
  },
  totalIncome: {
    type: Number,
    default: 0
  },
  totalExpense: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default mongoose.model('Stats', statsSchema);