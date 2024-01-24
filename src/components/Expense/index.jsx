import { useState } from 'react';


const Expense = () => {

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
     
      

      
   

    return (
      <>
      {expenses.map((expense) => (
        <div key={expense.id} className='bg-green-50 m-5 flex flex-col rounded-md shadow-md px-6 py-4'>
        <div className=' flex justify-between'>
          <div className="flex flex-col">
            <p className='bg-green-200 text-sm text-gray-800 font-semibold rounded-full px-3 shadow'>{expense.date}</p>
            <p className='font-semibold text-xl text-gray-600'>{expense.category}</p>
            <p className='bg-green-200 text-sm text-gray-800 font-semibold '>{expense.payment}</p>
            
            </div>
            <p>-  {expense.cost} ₽</p>
            
        </div>
        </div>        
      ))}
      </>
    )
}
export default Expense