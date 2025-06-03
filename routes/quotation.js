const express = require('express');
const router = express.Router();
const Quote = require('../models/quotationModel');
const checkAdmin= require('../middleware/check-auth')
router.post('/create-quotation', async (req, res) => {
  try {
    const {
      submittedOn,
      organization,
      contact,
      phone,
      email,
      course,
      pax,
      plan,
      country,
      examVoucher,
      lab,
      batchCost,
      examVoucherCost,
      termsAndConditions
    } = req.body;

    const newQuote = new Quote({
      submittedOn,
      organization,
      contact,
      phone,
      email,
      course,
      pax,
      plan,
      country,
      examVoucher,
      lab,
      batchCost,
      examVoucherCost,
      termsAndConditions
    });

    const saved = await newQuote.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all quotes
router.get('/getall-quotation', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ submittedOn: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/update-quote-admin/:id', checkAdmin, async (req, res) => {
  const { id } = req.params;
  const { batchCost, examVoucherCost, termsAndConditions } = req.body;

  try {
    const updated = await Quote.findByIdAndUpdate(
      id,
      { batchCost, examVoucherCost, termsAndConditions },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
