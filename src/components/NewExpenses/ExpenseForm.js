import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  const [input, setInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  // const titleChangeHandler = (e) => {
  //   setInput((prevState) => {
  //     return {
  //       ...prevState,
  //       title: e.target.value
  //     }
  //   });
  // };

  // const amountChangeHandler = (e) => {
  //   setInput((prevState) => {
  //     return {
  //       ...prevState,
  //       amount: e.target.value
  //     }
  //   });
  // };

  // const dateChangeHandler = (e) => {
  //   setInput((prevState) => {
  //     return {
  //       ...prevState,
  //       date: e.target.value
  //     }
  //   });
  // };

  const inputChangeHandler = (input, value) => {
    switch(input) {
      case 'title':
        setInput((prevState) => {
          return {
            ...prevState,
            title: value
          }
        });
      break;

      case 'amount':
        setInput((prevState) => {
          return {
            ...prevState,
            amount: value
          }
        });
      break;

      default:
        setInput((prevState) => {
          return {
            ...prevState,
            date: value
          }
        });
      break;

    }
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={input.title} onChange={(e) => inputChangeHandler('title', e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={input.amount}
            min="0.01"
            step="0.01"
            onChange={(e) => inputChangeHandler('amount', e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={input.date}
            min="2023-10-19"
            max="2024-10-19"
            onChange={(e) => inputChangeHandler('date', e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
