import React from "react";

import ExpensesItem from "./ExpensesItem";
import "./ExpensesList.css";

const ExpensesList = props =>{
    let expensesContent = <p> No expenses found</p>;

    if(props.items.length >0){
      expensesContent = props.items.map((expense) => (
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