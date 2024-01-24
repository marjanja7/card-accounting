import Chart from 'components/Chart';
import ExpenseForm from 'components/ExpenseForm';
import Expense from 'components/Expense';
import ExpenseFilter from 'components/ExpenseFilter';


const ExpensesPage = () => {

  
   
return (
    <div className='flex flex-col'>
          <ExpenseForm  />

          <Chart />
          <ExpenseFilter/>
          
            <Expense />
          
    </div>
          )   
  }
export default ExpensesPage;