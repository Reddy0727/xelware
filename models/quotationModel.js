const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  companyName: String,
  contactName: String,
  contactNo: String,
  fullAddress: String,
  email: String,
  country: String,
  comments:String,

  courseName1: String,
  duration1: String,
  pax1: String,
  voucher1:String,
  lab1: String,
  location1: String,

  courseName2: String,
  duration2: String,
  pax2: String,
   voucher2:String,
  lab2: String,
  location2: String,

  courseName3: String,
  duration3: String,
  pax3: String,
   voucher3:String,
  lab3: String,
  location3: String,

  courseName4: String,
  duration4: String,
  pax4: String,
  voucher4:String,
  lab4: String,
  location4: String,

  submittedAt: String
});

module.exports = mongoose.model('Quote', quoteSchema);
