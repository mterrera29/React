import React from 'react'
import { useState } from 'react';
import {
    Button,
    Spacer
  } from '@chakra-ui/react'

const ItemCount = () => {

   const [counter, setCounter] = useState(0);
   function sumar(){
    setCounter(counter+1)
   }
   function restar() {
     if (counter > 0) {
       setCounter(counter - 1);
     } else {
       setCounter(counter);
     }
    }
  return (
    <div>
        <Button bg="gray.100"  width='150px' fontSize='14px'>
            <span onClick={restar}>-</span>
            <Spacer />
            <span>{counter}</span>
            <Spacer />
            <span onClick={sumar}>+</span>
        </Button>
    </div>
  )
}

export default ItemCount