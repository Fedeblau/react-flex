
import React, { useState } from 'react'
import Button from '../Button/Button'

const ItemDetail = ({producto}) => {
    const [counter, setCounter] = useState(1)
    const [addedProduct, setAddedProduct] = useState({})


    const handleAdd = () =>{
        setCounter(counter+1)
    }
    const handleSubstract = () =>{
        setCounter(counter-1)
    }

    const handleAddToCart = () => {
        setAddedProduct({...producto, cantidad:counter})
        console.log(addedProduct)
    }

  return (
    <>
    {producto&&
        <>
        <div>{producto.id}</div>
        <div>{producto.name}</div>
        <div>{producto.price}</div>
        <div>{producto.description}</div>
        <img src={producto.img} alt="" />
        <Button label='-' callback={handleSubstract} />
        <div>cantidad: {counter}</div>
        <Button label='+' callback={handleAdd} />
        <Button label='agregar al carrito' callback={handleAddToCart}/>
        </>
    }
    </>
  )
}

export default ItemDetail

