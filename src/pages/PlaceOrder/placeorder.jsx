import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../Context/StoreContext'

const placeorder = () => {

     const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='email' placeholder='Email address'/>
        <input type='number' placeholder='Phone number'/>
        <div className="multi-fields">
          <input type='text' placeholder='Address' />
          <input type='text' placeholder='City' />
        </div>
        <div className="multi-fields">
          <input type='number' placeholder='Pincode' />
          <input type='text' placeholder='State' />
        </div>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
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
              <button>PROCEED TO PAYMENT</button>
            </div>
          </div>
      </div>
    </form>
  )
}

export default placeorder
