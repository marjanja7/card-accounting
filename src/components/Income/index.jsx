import { useState } from 'react';


const Income = () => {

     const [income] = useState ([
        {
          id: 1,
          cost: 50200,
          category: 'Зарплата',
          payment: 'Карта',
          date: new Date(2023, 11, 24),
        },
        {
          id: 2,
          cost: 38000,
          category: 'Премия',
          payment: 'Наличные',
          date: new Date(2023, 11, 25),
        },
        {
          id: 3,
          cost: 8000,
          category: 'Проценты',
          payment: 'Карта',
          date: new Date(2023, 11, 24),
        },
        {
          id: 4,
          cost: 15000,
          category: 'Аренда',
          payment: 'Карта',
          date: new Date(2023, 11, 25),
        }  
      ])
     
      

      
   

    return (
      <>
      {income.map((income) => (
        <div key={income.id} className='bg-green-50 m-5 flex flex-col rounded-md shadow-md px-6 py-4'>
        <div className=' flex justify-between'>
          <div className="flex flex-col">
            <p className='bg-green-200 text-sm text-gray-800 font-semibold rounded-full px-3 shadow'>{income.date}</p>
            <p className='font-semibold text-xl text-gray-600'>{income.category}</p>
            <p className='bg-green-200 text-sm text-gray-800 font-semibold '>{income.payment}</p>
            
            </div>
            <p>-  {income.cost} ₽</p>
            
        </div>
        </div>        
      ))}
      </>
    )
}
export default Income