import React from "react";

import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate.js";

import Card from "../UI/Card.js";

const ExpensesItem = (props) => {

// const [title,setTitle] = useState(props.title); /* everytime the expenseItem function is called, a new separate state is created and managed independently by react*/

  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    </div>
    </Card>
  );
}

export default ExpensesItem;
