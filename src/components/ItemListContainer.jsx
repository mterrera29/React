import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Data from "./data.json"
import { useParams } from 'react-router-dom';

const ItemListContainer = ({}) => {

  const {category} = useParams()

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

  const [product, setProduct] = useState([])

  useEffect(() =>{
    fetchingData().then((product) => setProduct(product))
  }, [])
  

  const filtroCategoria = product.filter((productos) => productos.categoria === category);

  return (
    <div>
      {category ? <ItemList productos={filtroCategoria}/> : <ItemList productos={product}/>}
    </div>
  )
}

export default ItemListContainer