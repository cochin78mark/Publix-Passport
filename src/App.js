import React, { useState } from 'react';
import './App.css';
import Header from './src_components/Header';
import ExpenseForm from './src_components/ExpenseForm';
import ExpenseList from './src_components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Store Safety Shoes', amount: 55.00, category: 'Uniforms', date: '2026-05-18' },
    { id: 2, title: 'Dry Erase Markers for Board', amount: 12.45, category: 'Supplies', date: '2026-05-20' }
  ]);

  const addExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="app-container">
      <Header expenses={expenses} />
      <main className="main-content">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </main>
    </div>
  );
}

export default App;
