import React from "react";

import "./ExpensesList.css";

const ExpensesList = props =>{
    let expensesContent = <p> No expenses found</p>;

    if(filteredExpenses.length >0){
      expensesContent = filteredExpenses.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
    }
  
};

export default ExpensesList;