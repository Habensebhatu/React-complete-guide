import React, {useState} from "react";
import ExpensesForm from "./expensesForm";
import './newExpenses.css';

function NewExpenses(props){
  const [toggelForm, setToggelForm]=  useState(false)
   
    const AddExpensesHandler = (expense)=>{
        props.OnSaveExpenses(expense)
        setToggelForm(false)
     }

    const cancelForm = ()=>{
      setToggelForm(false)
    }
     const displayForm = () =>{
      setToggelForm(true)
    }
  return (
    <div className="new-expense">
    {!toggelForm && <button onClick={displayForm}>Add new</button>}
   {toggelForm && <ExpensesForm OnAddSaveExpenses={AddExpensesHandler} onCancelForm={cancelForm} /> }
    </div>
  )
}

export default NewExpenses;