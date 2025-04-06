import mongoose from "mongoose";

const GeoDataSchema = new mongoose.Schema({
  id: String,
  value: Number
})

export default mongoose.model("geoData", GeoDataSchema)