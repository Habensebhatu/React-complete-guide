import React, {useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/newExpensesForm";

const DumyExpenses = [
  {
    id: 1,
    title: "haben",
    amount: 123.2,
    date: new Date(2019, 2, 16),
  },
  {
    id: 2,
    title: "Maki",
    amount: 123.2,
    date: new Date(2022, 2, 16),
  },
  {
    id: 3,
    title: "abi",
    amount: 123.2,
    date: new Date(2021, 2, 16),
  },
];


function App() {
  
const [expenses, SetChangeArray] = useState(DumyExpenses);
console.log("teste", expenses);
const expenseHandler = (expense)=>{
  SetChangeArray((preExpenses)=>{
    return [expense, ...preExpenses]
  });
 
}
  return (
    <>
     <NewExpenses OnSaveExpenses={expenseHandler}/>
      <Expenses item={expenses}></Expenses>
     
    </>
  );
}

export default App;
