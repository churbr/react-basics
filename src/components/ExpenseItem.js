import "./ExpenseItem.css";

function ExpenseItem({ item, price, date }) { // Object destructuring
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div>
        <div>{item}</div>
        <div className="expense-item__price">${price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
