const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
  submittedOn: { type: Date, default: Date.now },
  organization: String,
  contact: String,
  phone: String,
  email: String,
  course: String,
  pax: Number,
  plan: String,
  country: String,
  examVoucher: Number,
  lab: String,
  batchCost: String,
  examVoucherCost: String,
  termsAndConditions: String
}, { timestamps: true });

module.exports = mongoose.model('Quote', quotationSchema);
