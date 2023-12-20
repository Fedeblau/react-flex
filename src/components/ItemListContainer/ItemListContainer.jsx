import React, { useEffect, useState } from 'react'
import { getProducts } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  // const [respuesta, setRespuesta] = useState('a ver que pasa')


  // const prods = [
  //   {id:1,
  //     nombre:"pord 1",
  //     descripcion: 'loremi impsum....'
  //   },
  //   {id:2,
  //     nombre:"pord 2",
  //     descripcion: 'loremi impsum....'
  //   },
  //   {id:3,
  //     nombre:"prod 3",
  //     descripcion: 'loremi impsum....'
  //   },
  // ]

  // const promesa = new Promise((resolve, reject) =>{

  //      //reject('la promesa se resolvio mal')
  //   }, 5000)
  // })

  // const getProductos = (bool) => new Promise((resolve, reject) =>{
  //   setTimeout(() => {
  //     if(bool){
  //       resolve(prods)
  //     }else{
  //       reject('No tenes los permisos')
  //     }
  //   }, 3000)

  // })

  // promesa.then((res)=>{
  //   setRespuesta(res)
  // }).catch((rej) => {
  //   console.log(rej)
  // })


  useEffect(() => {
    getProducts().then(res => {
      setProducts(res)
    }).finally(() => {
      setLoading(false)
    }
    )
  }, [])


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