import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa";
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, total, emptyCart, removeItem } = useContext(CartContext)

    console.log(cart)

    return (
        <div>
         {
        cart.map((item) => (
            <>
            <div key={item.id} className='pl-6 border-b border-b-black' >
                <h3>{item.name}</h3>
                <img className='h-20 ' src={item.img} alt={item.name} />
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.cantidad}</p>
                <button className='btn btn-danger' onClick={() => removeItem(item.id)}><FaTrash /> </button>

            </div>
            </>
        ))
    }
        <h3>Total compra $ {total()}</h3>

        <hr/>
        <button className='btn btn-danger' onClick={()=>emptyCart()}> Vaciar Carrito</button>
        </div>
    )
}

export default Cart