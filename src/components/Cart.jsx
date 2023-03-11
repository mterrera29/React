import React, { useContext, useState,  useEffect } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import {
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Button
} from '@chakra-ui/react';
import Form from './Form';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal]= useState(0);

  const eliminarProd = (id) =>{
    cart.map(()=>{
      setCart(cart.filter(item => item.id !== id));
      cartTotal();
    });
  };

  const vaciarCarrito = () =>{
    setCart([]);
  };
  
  const cartTotal = () =>{
    setTotal(cart.reduce((acc,prod) => acc+(prod.cantidad * prod.precio),0));
  };

  useEffect(() => {
    cartTotal();
  });
  
  return (
    <div>
      {cart.length > 0 ?
      <div className='carritoContainer'>
        <div className= "carrito">
          <Heading m="10px" as='h3' size='lg'>
            Carrito 🛒
          </Heading>
          <TableContainer>
            <Table variant="simple" display="flex" alignItems="center" justifyContent="center">
              <Tbody>
                {cart.map((item) =>{
                  return(
                    <Tr key={item.id}>
                      <Td><Link to={`/item/${item.id}`}><img src={item.img} alt="" className="img-carrito"></img></Link></Td>
                      <Td><Link to={`/item/${item.id}`}><p>{item.nombre}</p></Link></Td>
                      <Td><p>${item.precio}</p></Td>
                      <Td><p> Cantidad: {item.cantidad}</p></Td>
                      <Td><p>Total: $ {item.cantidad * item.precio}</p></Td>
                      <Td><Button colorScheme='red' size='xs' onClick={()=>eliminarProd(item.id)}>X</Button></Td>
                    </Tr>
                  )}
                )}
              </Tbody>
            </Table >
          </TableContainer>
          <div className='cartFooter'>
            <Heading  m="10px" as='h2' size='md'>
              Total a Pagar: $ {total} 
            </Heading>
            <Button colorScheme='red' size='sm' m="10px" onClick={()=>vaciarCarrito()}>
              Vaciar 🛒
            </Button>
          </div>
        </div >
        <div className='carritoForm'>
          <Form total={total} items={cart}/>
        </div>
      </div>
      :
      <div className='carritoContainer'>
        <div className='carritoForm'>
            <Heading m="10px" >No hay productos... 🛒</Heading>
        </div>
      </div>
      }
    </div>
  );
};

export default Cart;