import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

function ExpenseItem({ item, price, date }) { // Object destructuring
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{item}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
