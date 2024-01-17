import React, { useContext, useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { MyContext } from '../../context/MyContext'

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const {profe} = useContext(MyContext)



  const { category } = useParams()
 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const result = category
          ? await getProductsByCategory(category)
          : await getProducts();
        setProducts(result);
      } catch (error) {
        console.error('Error en el fetch de useEffect:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

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