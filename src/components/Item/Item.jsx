import React from 'react'

const Item = ({product}) => {

  return (
    <div className='w-40 bg-white'>
        <h2>{product.name}</h2> 
        <p>{product.description}</p>
        <img src={product.img}/>
    </div>
  )
}

export default Item