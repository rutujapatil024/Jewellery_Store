import React, { createContext, useState, useEffect } from "react";
import {product_list} from '../assets/assets';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {

  //const [product_list] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const url = "http://localhost:3001"
  const [token,setToken] = useState("");
  const [product_list,setProductList] = useState([])


  const addToWishlist = (item) => {
    setWishlist((prev) => {
      if (prev.some((wishlistItem) => wishlistItem._id === item._id)) {
        return prev; 
      }
      return [...prev, item];
    });
  };


  const removeFromWishlist = (itemId) => {
    setWishlist((prev) => prev.filter((item) => item._id !== itemId));
  };

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  },[])

  return (
    <StoreContext.Provider
      value={{
        product_list,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        url,
        token,
        setToken
        
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;