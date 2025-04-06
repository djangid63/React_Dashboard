import mongoose from "mongoose";

const lineDataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: [
    {
      x: {
        type: String,
        required: true,
      },
      y: {
        type: Number,
        required: true,
      },
    },
  ],
});

const LineData = mongoose.model("LineData", lineDataSchema);

export default LineData;
