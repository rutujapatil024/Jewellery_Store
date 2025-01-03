import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/PlaceOrder/placeorder'
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
    const[showLogin, setShowLogin] = useState(false)

  return ( 
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
