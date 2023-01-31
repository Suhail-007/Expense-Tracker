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

  return (
    <Card className='expenses'>
      <div>
        <ExpensesFilter selectedYear={filteredYear} onSelectYear={onSelectYearHandler}/>
      </div>
      <ExpenseItem title={props.item[0].title} price={props.item[0].amount} date={props.item[0].date} />
      <ExpenseItem title={props.item[1].title} price={props.item[1].amount} date={props.item[1].date} />
      <ExpenseItem title={props.item[2].title} price={props.item[2].amount} date={props.item[2].date} />
    </Card>
  )
}