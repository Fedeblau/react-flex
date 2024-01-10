import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])



  const { category } = useParams()
 

  useEffect(() => {
    category ?
    getProductsByCategory(category).then( res => {
      setProducts(res)
    }):
    getProducts().then(res => {
      setProducts(res)
    }).finally(() => {
      setLoading(false)
    }
    )
  }, [category])

  // console.log("fuera del effect", products)

  return (

    <div className='w-full flex justify-center items-center text-3xl bg-orange-300'>
      {loading
        ?
        <div>Cargando..... </div>
        :
        <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer