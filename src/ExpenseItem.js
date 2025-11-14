import { useState } from "react";

function ExpenseItem({ expense, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  function handleChange(e) {
    const { name, value } = e.target;
    setEditedExpense({ ...editedExpense, [name]: value });
  }

  function handleSave() {
    onEdit(editedExpense);
    setIsEditing(false);
  }

  return (
    <div className="expense-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedExpense.title}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            value={editedExpense.amount}
            onChange={handleChange}
          />

          {/* Added category select for editing */}
          <select
            name="category"
            value={editedExpense.category}
            onChange={handleChange}
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
            name="date"
            value={editedExpense.date}
            onChange={handleChange}
          />

          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {/*  Now shows category also */}
          <p>
            <strong>{expense.title}</strong> ({expense.category}) — ₹{expense.amount} on{" "}
            {expense.date}
          </p>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(expense.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ExpenseItem;
