const Expense = (props) => {
    const { expense} = props

    return (
        <div className="bg-indigo-50 m-10 flex flex-col items-start rounder-md shadow-md py-8 py-6'">
        <div className='flex flex-col items-start'>
            <p> {expense.cost} ₽</p>
            <p className='bg-indigo-200 text-indigo-800 font-semibold rounded-full px-3 py-1 shadow'>{expense.category}</p>
            <p className='font-bold text-2xl'>{expense.payment}</p>
            
        </div>
        </div>
    )
}
export default Expense