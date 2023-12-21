const Expense = (props) => {
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