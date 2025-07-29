const express = require('express');
const router = express.Router();
const {
  addTransaction,
  getTransactions,
  deleteTransaction,
} = require('../controllers/transactionController');

const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/transactions
router.post('/', protect, addTransaction);

// @route   GET /api/transactions
router.get('/', protect, getTransactions);

// @route   DELETE /api/transactions/:id
router.delete('/:id', protect, deleteTransaction);

module.exports = router;
