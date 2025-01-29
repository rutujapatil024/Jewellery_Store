import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const ItemDetails = () => {
  const { id } = useParams(); // Extract the dynamic item ID from the URL
  const { product_list } = useContext(StoreContext); // Get the product list from context

  // Find the item by matching the ID
  const item = product_list.find((item) => item._id === id); // Compare IDs (ensure type consistency)

  if (!item) {
    return <h2>Item not found</h2>; // Display a message if the item is not found
  }

  return (
    <div> 
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} style={{ width: "300px" }} />
      <p>{item.description}</p>
      <p>Price: Rs.{item.price}</p>
      <p>Weight: {item.weight}</p>
      
    </div>
  );
};

export default ItemDetails;