import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import Jewelitem from '../Jewelitem/Jewelitem'

export const ProductDisplay = ({product}) => {

    const {product_list} = useContext(StoreContext)

  return (
    <div className='product-display' id='product-display'>
      <h2>Explore our curated collection of jewellery across a range of categories</h2>
        <div className="product-display-list">
            {product_list.map((item,index)=>{
              
              
              if(product==="All"|| product===item.product){
                return <Jewelitem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
          
            })}
        </div>
    </div>
  )
}

export default ProductDisplay;
