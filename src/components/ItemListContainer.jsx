import React from 'react';
import ItemList from './ItemList';
import Data from "./data.json"
import { useParams } from 'react-router-dom';

const ItemListContainer = ({}) => {

  const {category} = useParams()

  ///promise
  const getDatos = () =>{
    return new Promise((resolve,reject)=>{
      if(Data.length===0){
        reject(new Error ("No hay datos"))
      }
        setTimeout(()=>{
          resolve(Data)
          
        }, 3000);
    });
  }
  ///async fetch
  async function fetchingData(){
    try{
    const datosFetched = await getDatos();
      console.log(datosFetched)
    }catch (err){
      console.log(err);
    }
  }

  fetchingData()

  const filtroCategoria = Data.filter((productos) => productos.categoria === category);

  return (
    <div>
      {category ? <ItemList productos={filtroCategoria}/> : <ItemList productos={Data}/>}
    </div>
  )
}

export default ItemListContainer