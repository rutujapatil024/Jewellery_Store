import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
      const [Navbar,setNavbar] =useState("Navbar");
  
  return (
    
    <div className='Navbar'>
      <img src={assets.nlogobg} alt="" className='logo'/>
      <div className='hallmark'>
        <img src={assets.hallmark} alt/>
      </div>
      <ul className="navbar-head">
        <Link to='/' onClick={()=>setNavbar("Home")}className={Navbar==="Home"?"active":""}>Home</Link>
        <a href='#categories' onClick={()=>setNavbar("Shop now")}className={Navbar==="Shop now"?"active":""}>Shop now</a>
        <a href='#footer' onClick={()=>setNavbar("Contact us")}className={Navbar==="Contact us"?"active":""}>Contact us</a>
        
      </ul> 
      
      <div className="navbar-right">
        <img onClick={()=>setShowLogin(true)} src={assets.profile} alt=''/>
        <div className='navbar-wishlist-icon'>
          <img src={assets.wishlist} alt=''/>
        <div className='navbar-cart-icon'>
          <img src={assets.cart} alt=''/>
        <div className='dot'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;