import React, { useState, useContext } from 'react';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import {
  Heading,
  Button,
  FormControl,
  Text,
  Image,
  Center
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';

const CheckOut = ({name, email, phone, items, total}) => {

  const [orderId, setOrderId] = useState(null);
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const date = Date();

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");
  
  const order = { 
    buyer: { name, phone, email }, 
    items, 
    date, 
    total  
  };
    
  const confirmSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    setCompraRealizada(`Muchas gracias ${name}! Su compra se realizó correctamente.`);
  }; 

  return (
    <div className='modalContainer'>
      <div className='modalCompra'>
        {compraRealizada?
        <div>
          <Center>
            <Image
              borderRadius='full'
              boxSize='70px'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Checked.svg/1024px-Checked.svg.png'
              alt='check'
              m="5px"
            />
          </Center>
          <Heading m="10px" as='h3' size='md'>{compraRealizada}</Heading>
          <Heading m="10px" as='h3' size='md'>ID de la compra: {orderId} </Heading>
          <Link to={`/`}>
            <Button colorScheme="red" m={3} onClick={()=>setCart([])} >
             Salir
            </Button>
          </Link>
        </div>
        : 
        <FormControl>
          <form onSubmit={confirmSubmit}>
            <Heading m="10px" as='h3' size='md'>Confirmación de compra</Heading>
            {items.map((item)=>{
              return(
                  <p>{item.nombre} - Cantidad: {item.cantidad}</p>)
              })} 
            <Text m="3px">Total: ${total} </Text>
            <Heading m="10px" as='h3' size='sm'>Verifique que sus datos sean correctos:</Heading>
            <Text m="3px">Nombre y Apellido: {name} </Text>
            <Text m="3px">Email: {email} </Text>
            <Text m="3px">Telefono: {phone} </Text >
            <Button colorScheme="blue" type="submit" m={3} >
              Confirmar Compra
            </Button>
            <Link to={`/`}>
              <Button colorScheme="red" m={3} >
                Cancelar
              </Button>
            </Link>
          </form>
        </FormControl>
        }
      </div>
    </div>
  );
};

export default CheckOut;