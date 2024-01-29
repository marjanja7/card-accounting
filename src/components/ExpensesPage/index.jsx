import Chart from 'components/Chart';
import ExpenseForm from 'components/ExpenseForm';
import Expense from 'components/Expense';
import ExpenseFilter from 'components/ExpenseFilter';
import { useState } from 'react';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState ([
    {
      id: 1,
      cost: 5600,
      category: 'Автомобиль',
      payment: 'Карта',
      date: new Date(2023, 11, 24),
    },
    {
      id: 2,
      cost: 3800,
      category: 'Еда',
      payment: 'Наличные',
      date: new Date(2023, 11, 25),
    },
    {
      id: 3,
      cost: 8000,
      category: 'Одежда',
      payment: 'Карта',
      date: new Date(2023, 11, 24),
    },
    {
      id: 4,
      cost: 12000,
      category: 'Обучение',
      payment: 'Карта',
      date: new Date(2023, 11, 25),
    }  
  ])

  const addExpense = (newExpense => {
    setExpenses ((prevExpenses =>[... prevExpenses, newExpense]));
  })
   
  return (
    <div className='flex flex-col'>
        <ExpenseForm  addExpense={addExpense} />
        {/* <Chart /> */}
        <ExpenseFilter expenses={expenses} setExpenses= {setExpenses}/> 
        {expenses.map((expense) => (
            <Expense key={expense.id} expense={expense} expenses={expenses} />
        ))}
    </div>
  )   
}
export default ExpensesPage;