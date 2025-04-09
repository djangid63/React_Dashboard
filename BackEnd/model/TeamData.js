import mongoose from "mongoose";

const TeamDataSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  age: Number,
  phone: String,
  access: String
})

export default mongoose.model('teamdatas', TeamDataSchema)