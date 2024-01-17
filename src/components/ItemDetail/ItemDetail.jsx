
import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import { MyContext } from '../../context/MyContext'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
    const [counter, setCounter] = useState(1)
    const [addedProduct, setAddedProduct] = useState({})

    
    const {tutor} = useContext(MyContext)
    
    const { addToCart, cart, isInCart } = useContext(CartContext)

    console.log(cart)

    const handleAdd = () =>{
        setCounter(counter+1)
    }
    const handleSubstract = () =>{
        setCounter(counter-1)
    }

    const handleAddToCart = () => {
        const newItem = {...producto, cantidad:counter}
        addToCart(newItem)     
    }

    
// volvemos 20:08 !!

  return (
    <>
    {producto &&
        <>
            <div>{producto.id}</div>
            <div>{producto.name}</div>
            <div>{producto.price}</div>
            <div>{producto.description}</div>
            <img src={producto.img} alt="" />

            {
                isInCart(producto.id)
                    ? <Link to='/cart'><Button label='Ir al Carrito' callback={handleAdd} /></Link>
                    :
                    <>
                        <Button label='-' callback={handleSubstract} />
                        <div>cantidad: {counter}</div>
                        <Button label='+' callback={handleAdd} />
                        <Button label='agregar al carrito' callback={handleAddToCart} />
                    </>
            }
        </>
    }
</>
  )
}

export default ItemDetail

