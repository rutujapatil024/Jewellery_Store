import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'

const home = () => {

    const[product,setProduct] = useState("All");

  return (
    <div>
      <Header/>
      <Categories product={product} setProduct={setProduct}/>
      <ProductDisplay category={product}/>
    </div>
  )
}

export default home
