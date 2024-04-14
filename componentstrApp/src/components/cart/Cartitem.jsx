import React from 'react'
import Labelprice from './Labelprice'
import Quantitycontainer from './QuantityContainer'

const Cartitems = ({id,label, price, quantity}) => {
  return (
    <>
    <Labelprice label={label} price={price}/>
    <Quantitycontainer quantity={quantity} id={id} />
    </>
  )
}

export default Cartitems