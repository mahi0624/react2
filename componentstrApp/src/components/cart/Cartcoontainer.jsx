import React from 'react'
import Cartitem from './Cartitem'
import { useState } from 'react';

let cartItem = [
    { id: 1, label: "Noodles", price: 30, quantity: 1 },
    { id: 2, label: "Biryani", price: 90, quantity: 1 },
    { id: 3, label: "Chips", price: 10, quantity: 1 },
  ];

const Cartcoontainer = () => {
    const[cart,setCart] =useState(cartItem);
  return (
     <>
     {cart.map((item)=>(
        <Cartitem key={item.id} {...item}/>
    ))}
     </>
  )
}

export default Cartcoontainer