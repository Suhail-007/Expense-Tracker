import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const onSaveExpenseHandler = function(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: new Date().getTime().toString()
    }

    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={onSaveExpenseHandler}/>
    </div>
  )
}

export default NewExpense;