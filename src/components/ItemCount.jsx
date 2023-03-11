import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import {
  Button,
  Spacer,
  Tooltip
} from '@chakra-ui/react';
import { CartContext } from '../context/ShoppingCartContext';
  

const ItemCount = ({stock, id, nombre , precio, img}) => {

  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useContext(CartContext);
  const [stockLimit, setStockLimit] = useState(false);

  const currentProductCart= cart.filter((prod) => prod.id == id);
  const cantDisponibleStock = currentProductCart.length === 0 ? stock : currentProductCart.map((item)=> stock- item.cantidad);

  function sumar(){
    if (counter < stock) {
      setCounter(counter + 1);
    };
  }

  function restar() {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    };
  }
  
  function reset(){
    setCounter(1);
  };

  function verStockLimit(){
    currentProductCart.map((item)=>{
      if(item.cantidad >= stock){
        setStockLimit(true);
      };
    });
  };
  
  useEffect(() => {
    verStockLimit();
  });

  const agregarCarrito = () =>{
    reset();
    setCart((productos) =>{
      const itemFound = productos.find((item) => item.id === id );
      if (itemFound){
        return productos.map((item)=>{
          if (item.id === id){
            return{ ...item, cantidad: item.cantidad + counter};
          }else{
            return item;
          };
        });
      }else{
        return [...productos, {id, cantidad: counter, precio, nombre, img}];
      };
    });
  };
  
  return (
    <div className='counterBtnContainer'>
        <div className='counterBtn'>
          {counter === 1?(<Button isDisabled >-</Button>)
          :<Button onClick={restar}>-</Button>
          }
          <Spacer />
          <span className="btn" onClick={reset}>{counter}</span>
          <Spacer />
          {counter < cantDisponibleStock?
          <Button onClick={sumar} >+</Button>
          :<Tooltip label="Limite de Stock superado">
            <Button placement="bottom" isDisabled>
              +
            </Button>
          </Tooltip>
          }
        </div>
        {stockLimit?
          <Tooltip label="Limite de Stock en 🛒 superado">
            <Button 
              isDisabled 
              variant='solid' colorScheme='blue'
              width='100px' 
              fontSize='14px'
              m="4px">
              Añadir al 🛒
            </Button>
          </Tooltip>
        :
          <Button 
            onClick={()=>agregarCarrito()} 
            variant='solid' colorScheme='blue'
            width='100px' 
            fontSize='14px'
            m="4px">
            Añadir al 🛒
          </Button>
        }
    </div>
  );
};

export default ItemCount;