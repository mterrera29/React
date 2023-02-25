import React from 'react'
import ItemDetail from './ItemDetail'
import Data from "./data.json";

const ItemDetailContainer = () => {
  return (
    <div><ItemDetail productos={Data} /></div>
  )
}

export default ItemDetailContainer