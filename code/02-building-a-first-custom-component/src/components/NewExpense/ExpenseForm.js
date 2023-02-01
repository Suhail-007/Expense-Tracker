import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [enteredValue, setEnteredValue] = useState('');
  // const [amountValue, setAmountValue] = useState('');
  // const [dateValue, setDateValue] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    amountValue: '',
    dateValue: ''
  })

  const titleChangeHandler = function(e) {
    // setEnteredValue(enteredValue);

    setUserInput(prevState => {
      return {
        ...prevState,
        enteredTitle: e.target.value
      }
    });

  }
  const amountChangeHandler = function(e) {
    // setAmountValue(amountValue);
    setUserInput(prevState => {
      return {
        ...prevState,
        amountValue: e.target.value
      }
    })

  }
  const dateChangeHandler = function(e) {
    // setDateValue(dateValue);
    setUserInput(prevState => {
      return {
        ...prevState,
        dateValue: e.target.value
      }
    })
  }

  const addValues = function(e) {
    e.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.amountValue,
      date: new Date(userInput.dateValue),
    }

    props.onSaveExpense(expenseData);

    setUserInput({
      enteredTitle: '',
      amountValue: '',
      dateValue: ''
    })
  }
  
  const date = new Date();
  const maxYear = date.getFullYear();
  const month = +date.getMonth() +1;
  const maxMonth = month < 10 ? '0'+month : month;
  const maxDay = date.toLocaleString('en-Us', { day: '2-digit' });
  
  return (
    <form onSubmit={addValues}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input value={userInput.enteredTitle} onChange={titleChangeHandler} type='text'/>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input value={userInput.amountValue} onChange={amountChangeHandler} type='number' min='0.01' step='0.01' />
      </div>
      <div className='new-expense__control'>
        <label>Title</label>
        <input value={userInput.dateValue} onChange={dateChangeHandler} type='date' min='2019-01-01' max={`${maxYear}-${maxMonth}-${maxDay}`} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
  )
}

export default ExpenseForm;