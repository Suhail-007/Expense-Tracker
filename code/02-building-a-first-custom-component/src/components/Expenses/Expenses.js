import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter.js';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const onSelectYearHandler = function(selectValue) {
    setFilteredYear(selectValue);

  }
  
  const filteredArr = props.items.filter(expense => expense.date.getFullYear() === +filteredYear);

  const renderExpenses = function(arr) {
    return arr.map(expense => <ExpenseItem
                      title={expense.title}
                      price={expense.amount}
                      date={expense.date}
                      key={expense.id}   />);
  }

  return (
    <Card className='expenses'>
      <div>
        <ExpensesFilter selectedYear={filteredYear} onSelectYear={onSelectYearHandler}/>
      </div>
      {renderExpenses(filteredArr)}
    </Card>
  )
}