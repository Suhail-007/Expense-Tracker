import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseHandler = function(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: new Date().getTime().toString()
    }

    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const openForm = function() {
    setIsEditing(true);
  }
  
  const closeForm = function () {
    setIsEditing(false);
  }

  const addNewExpense = <button onClick={openForm}>Add New Expenses</button>

  return (
    <div className='new-expense'>
    {!isEditing && addNewExpense}
    {isEditing && <ExpenseForm onCancel={closeForm} onSaveExpense={onSaveExpenseHandler}/>}
    </div>
  )
}

export default NewExpense;