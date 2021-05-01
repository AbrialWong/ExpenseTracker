import React from 'react';

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const SaveExpenseDataHandler=(enteredExpenseData)=>{
const expenseData={
    ...enteredExpenseData,
    id:Math.random.toString()
};
console.log(expenseData);
}
const NewExpense = () => {
    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData = {expenseData}/>
        </div>
    )
}

export default NewExpense;
