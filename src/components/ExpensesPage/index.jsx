import Chart from 'components/Chart';
import ExpenseForm from 'components/ExpenseForm';
import Expense from 'components/Expense';
import { useState } from 'react';

const ExpensesPage = () => {

  let sum = 0;
      expenses.forEach (function (expense) {
        sum += parseInt (expense.cost);
        return sum;
      });
    
      const [expenses, setExpenses] = useState    

   const paymentFilter = (payment) => {
    if (payment === 'all') {
      setFiltered(expenses);
    } else {
      let newExpenses = [...expenses].filter((expense) =>expense.payment === payment);
      setFiltered(newExpenses);
    }
    };

    const categoryFilter = (category) => {
      if (category === 'all') {
        setFiltered (expenses);
        } else {
          let newExpenses = [...expenses].filter(
            (expense) => expense.category === category,
          );
          setFiltered (newExpenses);
        }
    };

  


return (
    <div>
          <ExpenseForm  />
          <Chart />
          {expenses.map((expense) => 
            <Expense key={expense.id} expense={expense} />
          )} 
    </div>
          )   
  }
export default ExpensesPage;