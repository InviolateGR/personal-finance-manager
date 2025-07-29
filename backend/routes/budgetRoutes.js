const express = require('express');
const router = express.Router();
const { setBudget, getBudget } = require('../controllers/budgetController');
const { protect } = require('../middleware/authMiddleware');

// POST /api/budget - set or update budget
router.post('/', protect, setBudget);

// GET /api/budget/:month - get budget for a month
router.get('/:month', protect, getBudget);

module.exports = router;
