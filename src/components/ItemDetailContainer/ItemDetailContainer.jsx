import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)





    useEffect(() => { 
      const productRef = doc(db, 'products', id)

      getDoc(productRef)
       .then(snapshot =>{
         const data = snapshot.data()
         const productFormatted = { id: snapshot.id, ...data}
         setProducto(productFormatted)
       }).catch(err => {
        console.log(err)
       })




      // getProductById(id).then(res => setProducto(res))
    }, [id])
    


  return (
    <>

        <ItemDetail producto={producto}/>
    
    </>
  )
}

export default ItemDetailContainer