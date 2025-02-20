import React, { useContext, useState, useEffect } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';
import { assets } from '../../assets/assets'

const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async() => {
        const response = await axios.post(url+"/api/order/userorder",{},{headers:{token}});
        setData(response.data.data);
        
    }

    useEffect(()=>{
      if(token){
        fetchOrders();
      }
    },[token])
    

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
        {data.map((order,index)=>{
          return(
            <div key={index}className='my-orders-order'>
                <img src={assets.parcel_icon} alt="Parcel Icon" />    
                <p>{order.items.map((item,index)=>{
                  if(index=== order.item.length-1){
                    return item.name+" x " + item.quantity
                  }
                  else{
                    return item.name+ " x " +item.quantity+", "
                  }
                })}</p>     
                <p>${order.amount}.00</p>         
                <p>Item: {order.item.length}</p>
                <button>Track Order</button>
                 
                 <p></p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default MyOrders
