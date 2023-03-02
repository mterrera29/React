import React from 'react'
import { useState } from 'react';
import {
    Button,
    Spacer
  } from '@chakra-ui/react'

const ItemCount = ({stock}) => {

  const [counter, setCounter] = useState(1);
  function sumar(){
    if (counter < stock) {
      setCounter(counter + 1);
  }
  }
  function restar() {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  }
  
  return (
    <div>
        <Button bg="gray.100"  width='150px' fontSize='14px'>
            <span onClick={restar} className="btn">-</span>
            <Spacer />
            <span>{counter}</span>
            <Spacer />
            <span onClick={sumar} className="btn">+</span>
        </Button>
    </div>
  )
}

export default ItemCount