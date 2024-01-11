import { useState } from "react";
import Button from "components/Button";

const unsortedСategories = ["Еда","Одежда","Обучение","Путешествия","Развлечения","Автомобиль","Другое",];
const payments = ["Наличные", "Карта"];

const categories = unsortedСategories.sort();


const ExpenseForm = ({ addExpense }) => {
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [payment, setPayment] = useState (payments[0]);

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
        <form >
          <h1 className='text-center mx-auto my-12 text-3xl font-extrabold tracking-tight text-gray-700'>Учет расходов</h1>
              
              <div className= 'grid grid-cols-5 mt-6 gap-x-4 rounded-md'>
                  <label className='col-span-1'>
                  <input 
                      onChange={(event) => setCost(event.target.value)}
                      value={cost}
                      

                      name="cost" 
                      type="text"
                      onkeypress='return /[0-9]/i.test(event.key)'

                      className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm" placeholder="00.00"></input>
                  </label>
              
              
              
                  <label className='col-span-2'>
                  <div className='relative'>
                      <select 
                          value={category}
                          onChange={event => setCategory(event.target.value)}
                          className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm">
                          {categories.map(category => (
                              <option key={category}>{category}</option>
                          ))}
                      </select>
                      </div>
                  </label>
                
                  <label className='col-span-2'>
                  <div className='relative'>
                      <select 
                          value={payment}
                          onChange={event => setPayment(event.target.value)}
                          className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm">
                          {payments.map(payment => (
                              <option key={payment}>{payment}</option>
                          ))}
                      </select>
                      </div>
                      </label>
                  
              </div>
              <div className='col-span-1 '>
                  <Button title='Добавить' handleClick={handleClick} type='submit'/>
              </div>
          
    </form>  
   </div> 
)
}
export default ExpenseForm;