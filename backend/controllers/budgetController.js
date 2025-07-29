const Budget = require('../models/Budget');

// @desc Set or update budget
// @route POST /api/budget
// @access Private
const setBudget = async (req, res) => {
  const { month, amount } = req.body;

  if (!month || !amount) {
    return res.status(400).json({ message: 'Month and amount are required.' });
  }

  const existing = await Budget.findOne({ user: req.user.id, month });

  if (existing) {
    existing.amount = amount;
    await existing.save();
    res.json({ message: 'Budget updated.', budget: existing });
  } else {
    const budget = await Budget.create({
      user: req.user.id,
      month,
      amount,
    });
    res.status(201).json({ message: 'Budget set.', budget });
  }
};

// @desc Get budget for a month
// @route GET /api/budget/:month
// @access Private
const getBudget = async (req, res) => {
  const { month } = req.params;
  const budget = await Budget.findOne({ user: req.user.id, month });

  if (!budget) {
    return res.status(404).json({ message: 'No budget found for this month.' });
  }

  res.json(budget);
};

module.exports = {
  setBudget,
  getBudget,
};
