import { useState } from "react";

const ExpenseFilter = ({expenses, setExpenses}) => {
    const [filteredExpenses, setFilteredExpenses] = useState (expenses);
    const [selectedCategory,setSelectedCategory] = useState (null);
    const [selectedPayment, setSelectedPayment] = useState (all);

    const resetFilters = () => {
        setFilteredExpenses(expenses)
        setSelectedCategory(null)
        setSelectedPayment('all')
    }

    const categoryFilter = (category) => {
        if (category === selectedCategory) {
          resetFilters ();
          } else {
            let newFilteredExpenses = expenses.filter((expense) => expense.category === category);
            setFilteredExpenses (newFilteredExpenses)
            setSelectedCategory (category)
            setSelectedPayment ('all')

          }
      }

    const paymentFilter = (payment) => {
        if (payment === selectedPayment) {
            resetFilters();
        } else {
          const newFilteredExpenses = expenses.filter((expense) => {
            if (payment === 'all'){
                return true
            }
            return expense.payment === payment
            setFiltered(newExpenses);
          });
          setFilteredExpenses (newFilteredExpenses)
          setSelectedCategory (null)
          setSelectedPayment (payment)
        }
    };
    
    const uniqeCategories = expenses.reduce((categories,expense) => {
        if (!categories.includes(expense.category)) {
            categories.push(expense.category)
        }
        return categories
    },[])

     return (
     <div className="flex">
         <div className="flex flex-col gap-2 justify-center pl-8 my-3 w-2/5 ">
             <>
             <p>Метод оплаты: </p>
             <div className="flex flex-col gap-2 items-start w-3/4 justify-between">
                <button 
                    key='allPayments' 
                    className="lg:w-3/5 shadow-md px-2 py-1 rounded-lg bg-green-200 hover:bg-green-600"
                    onClick={() => resetFilters()} >
                    Все методы оплаты   
                </button>
                <button 
                    key='card'
                    className="lg:w-3/5 shadow-md px-2 py-1 rounded-lg bg-green-200 hover:bg-green-600"
                    onClick={() => paymentFilter('card')} >
                    Карта   
                </button>
                <button 
                    key='cash' 
                    className="lg:w-3/5 shadow-md px-2 py-1 rounded-lg bg-green-200 hover:bg-green-600"
                    onClick={() => paymentFilter('cash')} >
                    Наличные  
                </button>
             </div>
             </>
             <>
             <p>Категории: </p>
             <div className="flex flex-col gap-2 items-start w-3/4 justify-between">
                <button 
                    key = 'allCategories'
                    className="lg:w-3/5 shadow-md px-2 py-1 rounded-lg bg-green-200 hover:bg-green-600"
                    onClick={() => resetFilters()}  >
                    Все категории 
                 </button>

                {uniqeCategories.map((category)=> (
                    <li key={category} className="flex w-full items-center justify-between">
                        <button key={category}
                            className="lg:w-3/5 shadow-md px-2 py-1 rounded-lg bg-green-200 hover:bg-green-600"
                            onClick={() => categoryFilter(category)} >
                            {category}
                        </button>

                        {selectedCategory === category && (
                            <div>
                                {expenses.filter((expense) => expense.category === category)
                                    .map((expense)=> (
                                        <div key={expense.id}>
                                            {expense.date.toLocaleDatelString()} - {expense.payment} : {expense.cost} ₽
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </li>
                ))}

             </div>
             </>
         </div>
     </div> 
    )
}
export default ExpenseFilter;





    
//     let sum = 0;
//       expenses.forEach (function (expense) {
//          sum += parseInt (expense.cost);
//          return sum;
//        });
    
        
//  const [filtered, setFiltered] = useState (expenses);

//        let paymentExpenses = expenses.reduce((acc,cur) => {
//       const existType = acc.find((a) =>  a.payment ===cur.payment);
//        if (existType) {
//          existType.cost += +cur.cost;
//          return acc;
//        }

//        acc.push({
//          payment: cur.payment,
//          cost: +cur.cost,
//        });
//        return acc;
//      },[]);

//      let categoryExpenses = expenses.reduse((acc,cur) => {
//        const existType = acc.find((a) => a.category === cur.category);
//        if (existType) {
//          existType.cost += +cur.cost;
//          return acc;
//        }

//        acc.push({
//          category: cur.category,
//          cost: +cur.cost,
//        });
//        return acc;
//      },[]);
