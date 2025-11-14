import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(""); //  added

  function submitHandler(e) {
    e.preventDefault();

    if (!title || !amount || !date || !category) {
      alert("Please fill all fields!");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      date,
      category, //  included
    };

    onAddExpense(newExpense);

    // reset form
    setTitle("");
    setAmount("");
    setDate("");
    setCategory(""); //  added
  }

  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>
      <form onSubmit={submitHandler}>
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="add-btn">
           Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
