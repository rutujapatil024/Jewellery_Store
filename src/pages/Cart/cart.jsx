import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const cart = () => {

    const{cartItems, jewel_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

    const Navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {jewel_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <div>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt =""/>
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs.{item.price * cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)}className='cross'>X</p>
              </div>
                <hr/>
              </div>
            )
          }
        })}
      </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Making Charges</p>
                <p>{getTotalCartAmount()===0?0:0.10}</p>
              </div>
              <div className="cart-total-details">
                <p>SGST</p>
                <p>CGST</p>
                <p></p>
                <hr/>
              <div className="cart-total-details">
                  <b>Total</b>
                  <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+0.10}</b>
              </div>
              </div>
              <button onClick={()=>Navigate('/placeorder')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className='cart-promocode-input'>
                    <input type="text" placeholder='promo-code'/>
                    <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default cart
