
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import  Shop from './components/page/shop';
import Cart from './components/page/cart';
import Login from './components/page/LoginShopping';
import Product from './components/page/product';
import Shopcategory from './components/page/shopcategory';
// name the tag differently
function App() {
  return (
   <div>
    
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/shopcategory' element={<Shopcategory/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Shop/>}/>
    </Routes>
    </BrowserRouter>
    
    
    
     
   
    </div>
  );
}

export default App;
