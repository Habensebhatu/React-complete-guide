import React, {useState} from 'react';
import './expensesForm.css'
function ExpensesForm(props){

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] =  useState('');
    const [enteredDate, setDate] =  useState('');
   
   
    const TitleHandler = (event) =>{
     setTitle(event.target.value); 
    }
   

    const amountHandler = (event) =>{
     setAmount(event.target.value); 
    }

    const dateHandler = (event) =>{
     setDate(event.target.value); 
    }

    const sumbitHandler = (event) =>{
       event.preventDefault();
       const inputValue = {
        title : enteredTitle,
        amount:  enteredAmount,
        date: new Date(enteredDate)
       }
       props.OnAddSaveExpenses(inputValue);
       setTitle('');
       setAmount('');
       setDate ('');
      
    }
    

    return(
       
        <form onSubmit={sumbitHandler} >
            <><div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>
                            Title
                        </label>
                        <input type='text' value={enteredTitle} onChange={TitleHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>
                            amount
                        </label>
                        <input type='number' value={enteredAmount} onChange={amountHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>
                            date
                        </label>
                        <input type='date' value={enteredDate} onChange={dateHandler} />
                    </div>
                </div><div className='new-expense__actions'>
                      <button type='button' onClick={props.onCancelForm}>Cancel</button>
                        <button type='sumbit'>Add</button>
                    </div>
                    </>
        </form>
         
       
    )
}

export default ExpensesForm;