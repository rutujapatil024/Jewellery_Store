import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import Bridal from '../../components/Bridal/Bridal'
import ShopByGender from '../../components/ShopByGender/ShopByGender'
import VideoGallery from '../../components/VideoGallery/VideoGallery'

const home = () => {

    const[product,setProduct] = useState("All");
    

  return (
    <div>
      <Header/>
      <Categories product={product} setProduct={setProduct}/>
      <ProductDisplay product={product}/>
      <VideoGallery />
      <Bridal/>  
      <ShopByGender/>
      
    </div>
  )
}

export default home