import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__description">July. 05, 2023</div>
      <div>
        <div>Dolce & Gabanna (Eau De Parfum) - The One</div>
        <div className="expense-item__price">$138.55</div>
      </div>
    </div>
  );
}

export default ExpenseItem;