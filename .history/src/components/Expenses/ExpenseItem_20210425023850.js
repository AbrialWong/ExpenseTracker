import React, {useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";

import Card from "./../UI/Card.js";


const ExpenseItem = (props) => {

// const [title,setTitle] = useState(props.title); /* everytime the expenseItem function is called, a new separate state is created and managed independently by react*/

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    </div>
    </Card>
  );
}

export default ExpenseItem;
