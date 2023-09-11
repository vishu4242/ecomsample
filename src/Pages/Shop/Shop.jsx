import React from 'react'
import { PRODUCTS } from '../../Products'
import Prouducts from './Prouducts'

const Shop = () => {
  return (
    <div>Shop
      <div>
        {PRODUCTS.map((products)=>(<Prouducts data={products}/>))}

      </div>
    </div>
  )
}

export default Shop