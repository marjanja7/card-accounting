import { useState } from "react";

const ExpenseFilter = () => {

    const [expenses, setExpenses] = useState ();  
  let sum = 0;
      expenses.forEach (function (expense) {
        sum += parseInt (expense.cost);
        return sum;
      });
    
        
const [filtered, setFiltered] = useState (expenses);

    const addExpense = (expense => {
      const newExpenses = [...expenses, expense];
      setExpenses (newExpenses);
    })

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

    let paymentExpenses = expenses.reduce((acc,cur) => {
      const existType = acc.find((a) =>  a.payment ===cur.payment);
      if (existType) {
        existType.cost += +cur.cost;
        return acc;
      }

      acc.push({
        payment: cur.payment,
        cost: +cur.cost,
      });
      return acc;
    },[]);

    let categoryExpenses = expenses.reduse((acc,cur) => {
      const existType = acc.find((a) => a.category === cur.category);
      if (existType) {
        existType.cost += +cur.cost;
        return acc;
      }

      acc.push({
        category: cur.category,
        cost: +cur.cost,
      });
      return acc;
    },[]);

    return (
    <div className="flex">
        <div className="flex flex-col gap-2 justify-center pl-8 my-3 w-2/5 ">
            <>
            <p>Метод оплаты: </p>
            <div className="flex flex-col gap-2 items-start w-3/4 justify-between">
               {paymentExpenses.map((expense) => (
                <li key={expense.payment} className="flex w-full items-center justify-between">
                <button key={expense.payment} className="lg:w-3/5 shadow-md px-2 py-1 rounded-lg bg-green-200 hover:bg-green-600"
                        onClick={() => paymentFilter(expense.payment)} >
                        {expense.payment}   
                </button>
                <div className="text-md">{expense.cost} ₽</div>
                </li>
                ))}
            </div>
            </>
            <>
            <p>Категории: </p>
            <div className="flex flex-col gap-2 items-start w-3/4 justify-between">
               {categoryExpenses.map((expense) => (
                <li key={expense.category} className="flex w-full items-center justify-between">
                <button key={expense.category} className="lg:w-3/5 shadow-md px-2 py-1 rounded-lg bg-green-200 hover:bg-green-600"
                        onClick={() => categoryFilter(expense.category)} >
                        {expense.category}   
                </button>
                <div className="text-md">{expense.cost} ₽</div>
                </li>
                ))}
            </div>
            </>
        </div>
    </div> 

)
}
export default ExpenseFilter