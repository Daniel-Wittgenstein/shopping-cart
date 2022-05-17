

/* This is the top-level component. */


import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Home"
import Shop from "./Shop"
import Cart from "./Cart"
import NotFoundPage from "./NotFoundPage"

import {useState} from 'react'


function clone(shopData) {
  /* Of course, we cannot use maps, sets etc. and other non-jsonifiable
  data. We are very aware of the limitations of this clone method and code appropriately.
  If we wanted maps, sets etc., we would use lodash or similar. */
  return {
    data: JSON.parse(JSON.stringify(shopData.data)),
    methods: shopData.methods,
  }
}


const RouteSwitch = () => {

  const [shopData, setShopData]  = useState({
    data: {
      shopProducts: [],
    },
  
    methods: {
      reloadShopProducts() {
        //console.log("reload shop products")
        fetch('https://fakestoreapi.com/products')
              .then( res => res.json() )
              .then( n => {
                let nuShopData = clone(shopData)
                nuShopData.data.shopProducts = n
                console.log("new shop data", nuShopData)
                setShopData(nuShopData)
                //console.log("shop products loaded at " + new Date())
              })
      },
    },

  })
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop shopData={shopData} />} />
        <Route path="/cart" element={<Cart shopData={shopData} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}


/* fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            
*/

export default RouteSwitch;