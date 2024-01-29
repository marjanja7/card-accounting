// import Chart from "components/Chart";
import IncomeForm from "components/IncomeForm";
import Income from "components/Income";
import ExpenseFilter from "components/ExpenseFilter";
import { useState } from "react";

const IncomePage = () => {
    const [incomes, setIncomes] = useState ([
        {
          id: 1,
          cost: 50200,
          category: 'Зарплата',
          payment: 'Карта',
          date: new Date(2023, 11, 24),
        },
        {
          id: 2,
          cost: 38000,
          category: 'Премия',
          payment: 'Наличные',
          date: new Date(2023, 11, 25),
        },
        {
          id: 3,
          cost: 8000,
          category: 'Проценты',
          payment: 'Карта',
          date: new Date(2023, 11, 24),
        },
        {
          id: 4,
          cost: 15000,
          category: 'Аренда',
          payment: 'Карта',
          date: new Date(2023, 11, 25),
        }  
      ])

      const addIncome = (newIncome => {
          setIncomes ((prevIncomes => [...prevIncomes, newIncome]));
      })   

    return (
        <div className='flex flex-col'>
              <IncomeForm addIncome={addIncome} />
              {/* <Chart /> */}
              <ExpenseFilter/>
              {income.map((income)=> (
              <Income key={income.id} income={income} incomes={incomes} />
              ))} 
        </div>
              )   
      }
    export default IncomePage;