import React, { useContext } from 'react';
import './ProductDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import Jewelitem from '../Jewelitem/Jewelitem';
import { useNavigate } from "react-router-dom";

export const ProductDisplay = ({ product }) => {
  const { product_list } = useContext(StoreContext);
  const navigate = useNavigate();  // Initialize useNavigate hook

  console.log("Selected Product Category:", product);
  console.log("Product List:", product_list);

  // Function to handle image click and navigate to a specific product page
  const handleProductClick = (id) => {
   //navigate(`'./components/ItemDetails/ItemDetails/'${id}`);  // Redirect to the product details page using the product's ID
   navigate(`/item-details/${id}`);  // Redirect to the product details page using the product's ID

  };

  return (
    <div className='product-display' id='product-display'>
      <h2>Explore our curated collection of jewellery across a range of categories</h2>
      <div className="product-display-list">
        {product_list.map((item, index) => {
          // Filter the products based on category if provided
          if (product === "All" || product === item.category_name){
            return (
              
              <div key={index} onClick={() => handleProductClick(item._id)}>
                <Jewelitem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </div>
            );
          }
         
        })}
      </div>
    </div>
  );
};
export default ProductDisplay;