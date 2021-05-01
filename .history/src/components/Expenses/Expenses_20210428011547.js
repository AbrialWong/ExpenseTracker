import React, { useState } from "react";

import ExpensesItem from "./ExpensesItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "./../UI/Card.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
