
const Income = (incomes, income) => {

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
export default Income;