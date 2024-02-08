import 'components/App/App.css';
import NavBar from 'components/NavBar';
import HomePage from 'components/HomePage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import RestaurantPage from 'components/Restaurants/RestaurantPage';

 function App () {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element={<HomePage/>} />
          <Route path= '/restaurant/:slug' element={<RestaurantPage/>} /> 
        </Routes>   
    </BrowserRouter>
  );
}
export default App;
