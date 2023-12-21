import 'components/App/App.css';
import Chart from 'components/Chart';
import ExpenseForm from 'components/ExpenseForm';
import Expense from 'components/Expense';
import { useState } from 'react';

 function App () {

  const [expenses, setExpenses] = useState ([
    {
      id: 1,
      cost: 5600,
      category: 'Автомобиль',
      payment: 'Карта',
    },
    {
      id: 2,
      cost: 3800,
      category: 'Еда',
      payment: 'Наличные',
    },
    {
      id: 3,
      cost: 8000,
      category: 'Одежда',
      payment: 'Карта',
    },
    {
      id: 4,
      cost: 12000,
      category: 'Обучение',
      payment: 'Карта',
    }  
  ])
 
  let sum = 0;
  expenses.forEach (function (expense) {
    sum += parseInt (expense.cost);
    return sum;
  });

  const addExpense =(expense) => {
    setExpenses([...expenses,expense])
  }

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
