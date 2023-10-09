import ExpenseItem from './ExpenseItem';
import "./Expenses.css";
import Card from '../UI/Card';

const Expenses = ({expenses}) => {

  return (
    <Card className="expenses">
      <ExpenseItem
        item={expenses[0].item}
        date={expenses[0].date}
        price={expenses[0].price}
      />
      <ExpenseItem
        item={expenses[1].item}
        date={expenses[1].date}
        price={expenses[1].price}
      />
      <ExpenseItem
        item={expenses[2].item}
        date={expenses[2].date}
        price={expenses[2].price}
      />
    </Card>
  );
}

export default Expenses;