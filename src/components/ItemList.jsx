import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
  return (
    <div className='cardContainer'>
      {productos.map((prod) =>(
        <Item
          key={prod.id}
          id={prod.id}
          nombre={prod.nombre}
          img={prod.img}
          precio={prod.precio}
          stock={prod.stock}
          descripcion={prod.descripcion}
          categoria={prod.categoria}/>
        ))
      }
    </div>
  );
};

export default ItemList;