// script to test connection and schema save
const mongoose = require('mongoose');
const Portfolio = require('./models/Portfolio');

require('dotenv').config();

const testSave = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    let portfolio = await Portfolio.findOne();
    if(portfolio) {
        portfolio.projectCategories.push({ name: "Testing Backend Save", filterTag: "TEST" });
        await portfolio.save();
        console.log("SUCCESS!");
    } else {
        console.log("No portfolio found.");
    }
  } catch(e) {
    console.error("ERROR", e);
  } finally {
    process.exit(0);
  }
}

testSave();
