import React, { useState } from "react";
import ExpenssesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpensesFilter from "../filter/expensesFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseLIst";

function Expenses(props) {
  const [enteredFilter, setFilter] = useState("2023");
  const saveFilterhandel = (year) => {
    setFilter(year);
  };
  const filteredExpense = props.item.filter(expense => expense.date.getFullYear() == enteredFilter)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilter}
          OnsaveFilter={saveFilterhandel}
        />
        <ExpenssesChart expenses={filteredExpense}/>
      <ExpenseList items={filteredExpense}/>
      </Card>
    </div>
  );
}
export default Expenses;
