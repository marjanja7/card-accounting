import Chart from "components/Chart";
import IncomeForm from "components/IncomeForm";
import Income from "components/Income";
import ExpenseFilter from "components/ExpenseFilter";


const IncomePage = () => {

  
   
    return (
        <div className='flex flex-col'>
              <IncomeForm  />
    
              <Chart />
              <ExpenseFilter/>
              
                <Income />
              
        </div>
              )   
      }
    export default IncomePage;