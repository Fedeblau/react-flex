import React from 'react'
import { GiShoppingCart } from "react-icons/gi";


const CartWidget = () => {
  return (
    <div className='text-white flex items-center'>
        <GiShoppingCart className='text-2xl'/>
        <span>6</span>
    </div>
  )
}

export default CartWidget