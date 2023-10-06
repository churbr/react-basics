import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        {props.date.toDateString()}
      </div>
      <div>
        <div>{props.item}</div>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
