import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {

  const[list,setList] = useState([]);

  const fetchList = async() => {
    const response = await axios.get(`${url}/api/jewel/list`);

    if(response.data.success) {
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async(jewelId) => {
      const response = await axios.post(`${url}/api/jewel/remove`,{id:jewelId});
      await fetchList();
      if (response.data.success){
        toast.success(response.data.message)
      }
      else{
        toast.error("Error")
      }
  }

  useEffect(()=>{
    fetchList();
  },[])


  return (
    <div className='list add flex-col'>
      <p>Jewellery List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Sub-category</b>
          <b>Gender</b>
          <b>Size</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.subcategory}</p>
              <p>{item.gender}</p>
              <p>{item.size}</p>
              <p>Rs.{item.price}</p>
              <p onClick={()=>removeFood(item._id)}className='cursor'>X</p>             
            </div>
          )

        })}
      </div>
      
    </div>
  )
}

export default List
