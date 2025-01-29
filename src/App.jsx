import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Home from './pages/Home/home';
import Wishlist from './pages/Wishlist/Wishlist';
import PlaceOrder from './pages/PlaceOrder/placeorder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Cart from './pages/Cart/Cart';


const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    

    return ( 
        <>
            {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    
                    <Route path='/' element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/placeorder' element={<PlaceOrder />} />
                    <Route path="/item/:id" element={<ItemDetails />} />
                </Routes>
            </div>
            <Footer />
            
        </>
    );
};

export default App;
