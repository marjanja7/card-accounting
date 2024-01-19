import { useState } from "react";
import Button from "components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, compareAsc } from "date-fns";

const unsortedСategories = ["Еда","Одежда","Обучение","Путешествия","Развлечения","Автомобиль","Другое",];
const payments = ["Наличные", "Карта"];

const categories = unsortedСategories.sort();


const ExpenseForm = ({ addExpense }) => {
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [payment, setPayment] = useState (payments[0]);
  const [startDate, setStartDate] = useState(new Date());

  const handleClick = (event) => {
    event.preventDefault();
    
    const expense = {
      cost,
      category,
      payment,
      date
    }
    console.log(expense)

    addExpense(expense)
    setCost('')
    setCategory('')
    setPayment('')
  }

  const onChange=(event) => {
    const oldValue = event.target.value
    const newValue = oldValue.replace(/\D+/,'')

    setCost(newValue)
  }
  return (
      <div>
        <form >
          
              
              <div className= 'grid grid-cols-5 mt-6 gap-x-4 rounded-md'>

              <label className='col-span-1'>
                  <DatePicker
                  selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      locale={ru}
                      dateFormat='dd.MM.yyyy'
                      placeholderText='Введите дату'
                      className= 'border border-solid border-gray-300 rounded w-fit '
                      />

                      
                  </label>

                  <label className='col-span-1'>
                  <input 
                      onChange={onChange}
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