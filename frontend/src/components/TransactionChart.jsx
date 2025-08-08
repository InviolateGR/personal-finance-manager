import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const TransactionChart = ({ transactions }) => {
  // Group transactions by month
  const monthlyData = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const month = date.toLocaleString('default', { month: 'short', year: 'numeric' });

    if (!monthlyData[month]) {
      monthlyData[month] = { month, income: 0, expense: 0 };
    }

    if (t.type === 'income') {
      monthlyData[month].income += t.amount;
    } else {
      monthlyData[month].expense += t.amount;
    }
  });

  const data = Object.values(monthlyData);

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Income vs Expense (Monthly)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#4ade80" />
          <Bar dataKey="expense" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionChart;
