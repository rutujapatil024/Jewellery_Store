import React from 'react'
import './Jewelitem.css'
import { assets } from '../../assets/assets'

const Jewelitem = ({id,name,price,description,image}) => {
  return (
    <div className='jewel-item'>
        <div className="jewel-item-img-container">
            <img className='jewel-item-image' src={image} alt=''/>
        </div>
        <div className="jewel-item-info">
            
                // <p>{name}</p>
                
            </div>
            //<p className='jewel-item-desc'>{description}</p>
            <p className='jewel-item-price'>Rs.{price}</p>
        </div>
  )
}

export default Jewelitem
