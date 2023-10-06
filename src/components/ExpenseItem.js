import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ item, price, date }) { // Object destructuring
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div>
        <div>{item}</div>
        <div className="expense-item__price">${price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
