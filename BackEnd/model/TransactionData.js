import mongoose from "mongoose";

const TransactionDataSchema = new mongoose.Schema({
  txId: String,
  user: String,
  date: String,
  cost: String,
})

export default mongoose.model('transactionData', TransactionDataSchema)