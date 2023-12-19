import { useState } from "react";
import Button from "components/Button";

const unsortedСategories = ["Еда","Одежда","Обучение","Путешествия","Развлечения","Автомобиль","Другое",];
const payments = ["Наличные", "Карта"];

const categories = unsortedСategories.sort();


const ExpenseForm = ({ addExpense }) => {
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [payment, setPayment] = useState (payment[0]);

  const handleClick = (event) => {
    event.preventDefault();
    
    const expense = {
      cost,
      category,
      payment
    }
    console.log(expense)

    addExpense(expense)
    setCost('')
    setCategory('')
    setPayment('')
  }

  return (
      <div>
        <form className='max-w-xl mx-auto bg-gray-50 shadow-md rounded-md mt-10 px-6 py-2'>
          <h1 className='pt-40 text-center text-5xl text-indigo-700'>Учет расходов</h1>
              <div className= 'grid grid-cols-5 mt-6 gap-x-4 rounded-md'>
                  <label className='col-span-2'>Сумма</label>
                  <input 
                      onChange={(event) => setCost(event.target.value)}
                      value={cost}
                      name="cost" 
                      type="text" 
                      className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" />
              </div>
              
              <div className= 'grid grid-cols-5 mt-6 gap-x-4 rounded-md'>
                  <label className='col-span-2'>Категория</label>
                  <div className='relative'>
                      <select 
                          value={category}
                          onChange={event => setCategory(event.target.value)}
                          className="col-span-2 border border-solid border-grey-400 rounded">
                          {categories.map(category => (
                              <option key={category}>{category}</option>
                          ))}
                      </select>
                  
                  </div>
              </div>
              <div className= 'grid grid-cols-5 mt-6 gap-x-4 rounded-md'>
                  <label className='col-span-2'>Способ оплаты</label>
                  <div className='relative'>
                      <select 
                          value={payment}
                          onChange={event => setPayment(event.target.value)}
                          className="col-span-2 border border-solid border-grey-400 rounded">
                          {payments.map(payment => (
                              <option key={payment}>{payment}</option>
                          ))}
                      </select>
                  
                  </div>
              </div>
              <div className='col-span-1 '>
                  <Button title='Добавить' handleClick={handleClick} type='submit'/>
              </div>
          
    </form>  
   </div> 
)
}
export default ExpenseForm;