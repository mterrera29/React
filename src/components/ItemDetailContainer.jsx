import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import Data from "./data.json";

const ItemDetailContainer = () => {

  ///promise
  const getDatos = () =>{
    return new Promise((resolve,reject)=>{
      if(Data.length === 0){
        reject(new Error ("No hay datos"))
      }
        setTimeout(()=>{
          resolve(Data)
        }, 2000);
    });
  }
  ///async fetch
  async function fetchingData(){
    try{
      const datosFetched = await getDatos();
      return datosFetched;
     }catch (err){
      console.log(err);
    }
  }

  const [product, setProduct] = useState([])

  useEffect(() =>{
    fetchingData().then((product) => setProduct(product))
  }, [])

  return (
    <div><ItemDetail productos={product} /></div>
  )
}

export default ItemDetailContainer