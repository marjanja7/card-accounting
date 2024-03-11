import 'components/App/App.css';
import NavBar from 'components/NavBar';
import HomePage from 'components/HomePage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import RestaurantPage from 'components/Restaurants/RestaurantPage';
import Cart from 'components/Restaurants/Basket';

 function App () {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element={<HomePage/>} />
          <Route path= '/Restaurant/:slug' element={<RestaurantPage/>} /> 
          <Route path= '/Restaurants/Cart' element={<Cart/>} />
        </Routes>   
    </BrowserRouter>
  );
}
export default App;
