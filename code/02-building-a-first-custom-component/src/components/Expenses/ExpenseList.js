import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

export default function ExpenseList(props) {
  
  const noItemFound = <h1 className='expenses-list__fallback'>No Expense Found.!</h1>;

  const renderExpenses = function(arr) {
    return arr.map(expense => <ExpenseItem
                      title={expense.title}
                      price={expense.amount}
                      date={expense.date}
                      key={expense.id} />);
  }

  if (props.items.length === 0) return noItemFound;

  return (
    <ul className='expenses-list'>
      {renderExpenses(props.items)}
    </ul>
  )
}