import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {

  const [product_list] = useState([
  ]);


  const [wishlist, setWishlist] = useState([]);


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

  return (
    <StoreContext.Provider
      value={{
        product_list,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;