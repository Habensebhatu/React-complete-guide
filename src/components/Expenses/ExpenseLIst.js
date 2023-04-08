import React from "react"
import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'
const ExpenseList = props =>{

  if(props.items.length == 0){
      return <div className="expenses-list__fallback "><h2>No found  expenses</h2></div>
  }

  return (
   <ul className="expenses-list">
   {props.items.map((expense, index) => (
    <ExpenseItem
      key = {index}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))} 
  </ul>
  )   
}

export default ExpenseList