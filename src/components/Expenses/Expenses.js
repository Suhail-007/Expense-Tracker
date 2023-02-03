import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import ExpenseList from './ExpenseList.js';
import ExpensesChart from './ExpensesChart.js';
import './Expenses.css';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const onSelectYearHandler = (selectValue) => setFilteredYear(selectValue);

  const filteredArr = props.items.filter(expense => expense.date.getFullYear() === +filteredYear);

  return (
    <Card className='expenses'>
      <div>
        <ExpensesFilter selectedYear={filteredYear} onSelectYear={onSelectYearHandler}/>
      </div>
      <ExpensesChart expenses={filteredArr} />
      <ExpenseList items={filteredArr} />
    </Card>
  )
}