import { useState } from 'react';

const Expense = (props) => {

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

    const { expense} = props

    return (
        <div className='bg-green-50 m-5 flex flex-col rounded-md shadow-md px-6 py-4'>
        <div className=' flex justify-between'>
          <div className="flex flex-col">
            <p className='font-semibold text-xl text-gray-600'>{expense.category}</p>
            
            <p className='bg-green-200 text-sm text-gray-800 font-semibold rounded-full px-3 shadow'>{expense.payment}</p>
            </div>
            <p>-  {expense.cost} ₽</p>
            
        </div>
        </div>
    )
}
export default Expense