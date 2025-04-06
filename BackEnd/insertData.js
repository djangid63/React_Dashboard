import mongoose from 'mongoose'
import mockData from './mockData.js'
import dotenv from 'dotenv'
import GeoData from './model/GeoData.js'
import TransactionData from './model/TransactionData.js'
import LineData from './model/LineData.js'


dotenv.config()

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('MongoDB Connected');
    await GeoData.insertMany(mockData.mockGeographyData)
    await TransactionData.insertMany(mockData.mockTransactions)
    await LineData.insertMany(mockData.mockLineData)
    console.log('Data Inserted Successfully');
    process.exit();
  })
  .catch(err => console.log(err));