import 'components/App/App.css';
import NavBar from 'components/NavBar';
import HomePage from 'components/HomePage';
// import Restaurant from 'components/Restaurants/Restaurant';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

 function App () {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element={<HomePage/>} />
          {/* <Route path= '/restaurant/:slug' element={<Restaurant/>} /> */}
        </Routes>   
    </BrowserRouter>
  );
}
export default App;
