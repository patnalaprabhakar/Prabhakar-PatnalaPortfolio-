const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Get portfolio data
router.get('/', async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne();
        if (!portfolio) {
            return res.status(404).json({ message: 'Portfolio data not found' });
        }
        res.json(portfolio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update portfolio data
router.put('/', async (req, res) => {
    try {
        // We assume a single portfolio document exists, or we create it if it doesn't
        let portfolio = await Portfolio.findOne();

        if (portfolio) {
            // Update existing
            portfolio = await Portfolio.findOneAndUpdate({}, req.body, { new: true, runValidators: true });
        } else {
            // Create new
            portfolio = new Portfolio(req.body);
            await portfolio.save();
        }

        res.json(portfolio);

        // Emit the real-time update to all connected clients
        req.io.emit('portfolioUpdated', portfolio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
