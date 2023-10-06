import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2023, 10, 6);
  const expenseItem = 'Dolce & Gabanna (Eau De Parfum) - The One';
  const expensePrice = 138.55;

  return (
    <div className="expense-item">
      <div className="expense-item__description">{expenseDate.toDateString()}</div>
      <div>
        <div>{expenseItem}</div>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;