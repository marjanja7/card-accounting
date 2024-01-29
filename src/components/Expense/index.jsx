import format from "date-fns/format";

const Expense = (expenses,expense) => {

  return (
      <>
      
        <div key={expense.id} className='bg-green-50 m-5 flex flex-col rounded-md shadow-md px-6 py-4'>
        <div key={`${expense.id}-oneExpense`} className=' flex justify-between'>
            <div className="flex flex-col">
                <p key={`${expense.id}-date`} className='bg-green-200 text-sm text-gray-800 font-semibold rounded-full px-3 shadow'>
                    {format(expense.date, 'dd.MM/yyyy')}
                </p>
                <p key={`${expense.id}-category`} className='font-semibold text-xl text-gray-600'>
                    {expense.category}
                </p>
                <p key={`${expense.id}-payment`} className='bg-green-200 text-sm text-gray-800 font-semibold '>
                    {expense.payment}
                </p> 
          </div>
          <p key={`${expense.id}-cost`} >
              -  {expense.cost} ₽
          </p>
            
        </div>
        </div>        
     
      </>
    )
}
export default Expense