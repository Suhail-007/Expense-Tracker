import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  
  const titleChangeHandler = function(e) {
    setEnteredValue(enteredValue);
  }
  const amountChangeHandler = function(e) {
    setAmountValue(amountValue);
  }
  const dateChangeHandler = function(e) {
    setDateValue(dateValue);
  }

  return (
    <form>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input onChange={titleChangeHandler} type='text'/>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input onChange={amountChangeHandler} type='number' min='0.01' step='0.01' />
      </div>
      <div className='new-expense__control'>
        <label>Title</label>
        <input onChange={dateChangeHandler} type='date' min='2021-01-01' max='2023-02-01' />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
  )
}

export default ExpenseForm;