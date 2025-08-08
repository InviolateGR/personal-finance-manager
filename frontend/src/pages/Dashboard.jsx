import { useEffect, useState } from 'react';
import API from '../services/api';
import TransactionForm from '../components/TransactionForm';
import TransactionChart from '../components/TransactionChart';
import BudgetTracker from '../components/BudgetTracker';
import Navbar from '../components/Navbar';


const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({ income: 0, expense: 0 });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await API.get('/transactions');
      setTransactions(res.data);

      const income = res.data
        .filter((t) => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
      const expense = res.data
        .filter((t) => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

      setSummary({ income, expense });
    } catch (err) {
      console.error('Error fetching transactions:', err);
    }
  };

  const handleAddTransaction = () => {
    fetchTransactions();
  };

  return (

    <div className="p-6 bg-gray-100 min-h-screen">
      
      {/* NavBar */}
      <TransactionForm onAdd={handleAddTransaction} />
      
      
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-green-700 border-l-4 border-green-500">
          <h2 className="text-lg font-medium">Income</h2>
          <p className="text-2xl font-bold">₹{summary.income}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-red-700 border-l-4 border-red-500">
          <h2 className="text-lg font-medium">Expense</h2>
          <p className="text-2xl font-bold">₹{summary.expense}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-blue-700 border-l-4 border-blue-500">
          <h2 className="text-lg font-medium">Savings</h2>
          <p className="text-2xl font-bold">
            ₹{summary.income - summary.expense}
          </p>
        </div>
      </div>

      
      {/* Budget Tracker */}
      <BudgetTracker budget={20000} expense={summary.expense} />

      {/* Add transaction form */}
      <TransactionForm onAdd={handleAddTransaction} />

      {/* Chart with spacing */}
      <div className="mb-6">
        <TransactionChart transactions={transactions} />
      </div>

      {/* Transaction list table */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Date</th>
              <th className="p-2">Type</th>
              <th className="p-2">Category</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t._id} className="border-t">
                <td className="p-2">{new Date(t.date).toLocaleDateString()}</td>
                <td className="p-2 capitalize">{t.type}</td>
                <td className="p-2">{t.category}</td>
                <td className="p-2">₹{t.amount}</td>
                <td className="p-2">
                  <button
                    onClick={async () => {
                      await API.delete(`/transactions/${t._id}`);
                      fetchTransactions();
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No transactions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
