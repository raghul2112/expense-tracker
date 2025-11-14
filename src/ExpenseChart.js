import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ExpenseChart({ expenses }) {
  // Convert data → total per month
  const data = [];

  expenses.forEach((expense) => {
    const month = new Date(expense.date).toLocaleString("default", {
      month: "short",
    });

    const found = data.find((d) => d.name === month);
    if (found) {
      found.amount += Number(expense.amount);
    } else {
      data.push({ name: month, amount: Number(expense.amount) });
    }
  });

  return (
    <div className="chart-container">
      <h3 className="chart-title">Monthly Spending Chart 📊</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" stroke="#334155" />
          <YAxis stroke="#334155" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f1f5f9",
              borderRadius: "8px",
              border: "1px solid #94a3b8",
            }}
          />
          <Bar dataKey="amount" fill="#2563eb" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;
