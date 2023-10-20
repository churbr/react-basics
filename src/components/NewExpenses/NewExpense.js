import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const onAddExpenseHandler = (input) => { // input: Expense input from ExpenseForm (child component)
        const expenses = {
            ...input,
            id: Math.random().toString()
        }

        props.onAddExpense(expenses);
        /**
          * This props.onAddExpense() is an attribute that holds a function from main App (parent) component.
          * That function will then be called and gets the data from this child component that we also got from ExpenseForm (child) component.
          **/
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onAddExpenseHandler} />
    </div>
};

export default NewExpense;