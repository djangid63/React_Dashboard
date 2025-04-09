import mongoose from 'mongoose';

const PieDataSchema = new mongoose.Schema({
  id: String,
  label: String,
  value: Number,
  color: String
});

const pieData = mongoose.model('piedatas', PieDataSchema);

export default pieData
