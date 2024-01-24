import 'components/App/App.css';
import ExpensesPage from 'components/ExpensesPage';
import IncomePage from 'components/IncomePage';
import Header from 'components/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

 function App () {

  

  // const categoryArrays = Object.values (groupBy(expenses,'category'))
  // categoryArrays.forEach((categoryArray) => {
  //   console.log (categoryArray)
  //   let eachCategory
  // })
  return (
    <BrowserRouter>
      <div className='max-w-xl mx-auto bg-green-100 shadow-md rounded-md mt-10 px-6 py-2'>
        <Header/>
        <Routes>
          <Route path= '/expenses' element={<ExpensesPage/>} />
          <Route path= '/income' element={<IncomePage />} /> 
          
       </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
