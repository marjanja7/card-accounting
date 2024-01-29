import { useState } from "react";

const IncomeFilter = () => {

    const [incomes, setIncomes] = useState ();  
  let sum = 0;
      incomes.forEach (function (income) {
        sum += parseInt (income.cost);
        return sum;
      });
    
        
const [filtered, setFiltered] = useState (incomes);


   const paymentFilter = (payment) => {
    if (payment === 'all') {
      setFiltered(incomes);
    } else {
      let newIncomes = [...incomes].filter((income) =>income.payment === payment);
      setFiltered(newIncomes);
    }
    };

    const categoryFilter = (category) => {
      if (category === 'all') {
        setFiltered (incomes);
        } else {
          let newIncomes = [...incomes].filter(
            (income) => income.category === category,
          );
          setFiltered (newIncomes);
        }
    };

    let paymentIncomes = incomes.reduce((acc,cur) => {
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

    let categoryIncomes = incomes.reduse((acc,cur) => {
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
               {paymentIncomes.map((income) => (
                <li key={income.payment} className="flex w-full items-center justify-between">
                <button key={income.payment} className="lg:w-3/5 shadow-md px-2 py-1 rounded-lg bg-green-200 hover:bg-green-600"
                        onClick={() => paymentFilter(income.payment)} >
                        {income.payment}   
                </button>
                <div className="text-md">{income.cost} ₽</div>
                </li>
                ))}
            </div>
            </>
            <>
            <p>Категории: </p>
            <div className="flex flex-col gap-2 items-start w-3/4 justify-between">
               {categoryIncomes.map((income) => (
                <li key={income.category} className="flex w-full items-center justify-between">
                <button key={income.category} className="lg:w-3/5 shadow-md px-2 py-1 rounded-lg bg-green-200 hover:bg-green-600"
                        onClick={() => categoryFilter(v.category)} >
                        {income.category}   
                </button>
                <div className="text-md">{income.cost} ₽</div>
                </li>
                ))}
            </div>
            </>
        </div>
    </div> 

)
}
export default IncomeFilter;