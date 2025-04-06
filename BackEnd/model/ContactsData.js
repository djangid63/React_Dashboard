import mongoose from "mongoose";

const contactsDataSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  age: Number,
  phone: String,
  address: String,
  city: String,
  zipCode: String,
  registrarId: Number
})

export default mongoose.model('contactData', contactsDataSchema)