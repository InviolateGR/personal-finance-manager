import React from 'react';

const BudgetTracker = ({ budget, expense }) => {
  const percentage = Math.min((expense / budget) * 100, 100);

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-bold mb-2">Monthly Budget</h2>
      <div className="flex justify-between mb-1">
        <span>₹{expense} spent</span>
        <span>₹{budget} budget</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`h-4 rounded-full ${
            percentage < 70 ? 'bg-green-500' : percentage < 90 ? 'bg-yellow-500' : 'bg-red-500'
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {percentage >= 100
          ? 'You have exceeded your budget!'
          : `${(budget - expense).toFixed(2)} remaining`}
      </p>
    </div>
  );
};

export default BudgetTracker;
