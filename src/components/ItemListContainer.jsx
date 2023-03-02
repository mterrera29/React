import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Data from "./data.json"
import { useParams } from 'react-router-dom';

const ItemListContainer = ({}) => {

  const {cat} = useParams()
  const [product, setProduct] = useState([])
  
  const filtroCategoria = product.filter((productos) => productos.cat === cat);
  
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
  ///async 
  async function fetchingData(){
    try{
    const datosFetched = await getDatos();
    return datosFetched;
  }catch (err){
    console.log(err);
  }
}

useEffect(() =>{
  fetchingData().then((product) => setProduct(product))
}, [])




  return (
    <div>
      {cat ? <ItemList productos={filtroCategoria}/> : <ItemList productos={product}/>}
    </div>
  )
}

export default ItemListContainer