import { useState } from 'react';
import API from '../services/api';

const TransactionForm = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/transactions', {
        amount: Number(amount),
        type,
        category,
        description,
        date,
      });
      onAdd(res.data); // refresh list in Dashboard
      setAmount('');
      setCategory('');
      setDescription('');
      setDate('');
      setType('expense');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add transaction');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 sm:grid-cols-5 gap-4"
    >
      <input
        type="number"
        placeholder="Amount"
        className="p-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select
        className="p-2 border rounded"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        type="text"
        placeholder="Category"
        className="p-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <input
        type="date"
        className="p-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button
        type="submit"
        className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Add
      </button>
    </form>
  );
};

export default TransactionForm;
