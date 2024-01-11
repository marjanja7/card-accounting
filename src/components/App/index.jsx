import 'components/App/App.css';
import Chart from 'components/Chart';
import ExpenseForm from 'components/ExpenseForm';
import Expense from 'components/Expense';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

 function App () {

  

  // const categoryArrays = Object.values (groupBy(expenses,'category'))
  // categoryArrays.forEach((categoryArray) => {
  //   console.log (categoryArray)
  //   let eachCategory
  // })
  return (
    <div className='max-w-xl mx-auto bg-green-100 shadow-md rounded-md mt-10 px-6 py-2'>
      <ExpenseForm addExpense={addExpense} />
      <Chart />
      {expenses.map((expense) => 
        <Expense key={expense.id} expense={expense} />
      )}
      
    </div>
    
  );
}
export default App;
