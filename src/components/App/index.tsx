import 'components/App/App.css';
import NavBar from 'components/NavBar';
import HomePage from 'components/HomePage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import RestaurantPage from 'components/Restaurants/RestaurantPage';
import Cart from 'components/Cart/index';
import OrderForm from 'components/Cart/OrderForm';

 function App () {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element={<HomePage/>} />
          <Route path= '/Restaurant/:slug' element={<RestaurantPage/>} /> 
          <Route path= '/Cart/index' element={<Cart/>} />
          <Route path= '/Cart/OrderForm' element={<OrderForm/>} />
        </Routes>   
    </BrowserRouter>
  );
}
export default App;
