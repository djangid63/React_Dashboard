import mongoose from "mongoose";

const BarDataSchema = new mongoose.Schema({
  country: String,
  "hot dog": Number,
  "hot dogColor": String,
  burger: Number,
  burgerColor: String,
  kebab: Number,
  kebabColor: String,
  donut: Number,
  donutColor: String
})

export default mongoose.model("BarData", BarDataSchema)