import React from 'react'

const QuantityContainer = (id,quantity) => {
  return (
    <>
    <button>-</button>
    <p>{quantity}</p>
    <button>+</button>
    </>
  )
}

export default QuantityContainer