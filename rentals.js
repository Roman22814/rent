const express = require('express');
const router = express.Router();

let rentals = [];

router.get('/', (req, res) => {
    res.json(rentals);
});

router.post('/', (req, res) => {
    const rental = req.body;
    rentals.push(rental);
    res.status(201).json({ message: 'Rental added successfully' });
});

module.exports = router;
