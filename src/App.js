import "./App.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpenseHandler(newExpense) {
    setExpenses((prev) => [...prev, newExpense]);
  }

  function deleteExpenseHandler(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }

  // edit function
  function editExpenseHandler(updatedExpense) {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  }

  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div className="app-container">
      <h1 className="app-title">Smart Expense Tracker 💰</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <h2 className="total-expense">Total Expense: ₹{total}</h2>
      <ExpenseList
        expenses={expenses}
        onDelete={deleteExpenseHandler}
        onEdit={editExpenseHandler} // pass edit handler
      />
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default App;
