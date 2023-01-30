import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {
  return (
    <Card className='expenses'>
      <h2>Let's get started!</h2>
      <ExpenseItem title={props.item[0].title} price={props.item[0].amount} date={props.item[0].date} />
      <ExpenseItem title={props.item[1].title} price={props.item[1].amount} date={props.item[1].date} />
      <ExpenseItem title={props.item[2].title} price={props.item[2].amount} date={props.item[2].date} />
    </Card>
  )
}