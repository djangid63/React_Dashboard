import mongoose from "mongoose";

const InvoicesDataSchema = mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  cost: String,
  phone: String,
  date: String,
})

export default mongoose.model('invoiceData', InvoicesDataSchema)