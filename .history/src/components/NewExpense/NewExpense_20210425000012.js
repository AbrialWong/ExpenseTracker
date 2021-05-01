import React from 'react';

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const saveExpenseDataHandler=(enteredExpenseData)=>{
const expenseData={
    ...enteredExpenseData,
    id:Math.random.toString()
};
props.onAddExpense(expenseData);
}
const NewExpense = (props) => {
    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;
