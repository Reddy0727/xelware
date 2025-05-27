const express = require('express');
const router = express.Router();
const Quote = require('../models/quotationModel');


router.post('/create-quotation', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const saved = await newQuote.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




router.get('/getall-quotation', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ submittedAt: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
