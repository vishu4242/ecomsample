import React from 'react'

const Prouducts = (props) => {
    const { productName, price, productImage }=props.data

  return (
    <div><b>{productName}</b>
   
    <img src={productImage} alt="description of p"></img>
    <p>${price}</p>
    <button>Add to cart</button>
    </div>
  )
}

export default Prouducts