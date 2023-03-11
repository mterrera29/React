import React, { useState } from 'react';
import {
  Container,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Tooltip
} from "@chakra-ui/react";
import CheckOut from './CheckOut';

const Form = ({total, items}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm]= useState (false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm (true);
  }; 

  return (
    <div>
      <Container>
        <Heading m="10px" as='h3' size='md'>Formulario de Compra</Heading>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <FormLabel m="3px">Nombre y Apellido</FormLabel>
            <Input size="s" w="500px" onChange={(e) => setName(e.target.value)}/>
            <FormLabel m="3px">Email</FormLabel>
            <Input size="s" w="500px"  placeholder='example@example.com' onChange={(e) => setEmail(e.target.value)}/>
            <FormLabel m="3px">Repita su Email</FormLabel>
            <Input size="s" w="500px"  placeholder='example@example.com' onChange={(e) => setEmail2(e.target.value)}/>
            {email === ""?
            <FormLabel m="3px" color="grey">Ingresar emails...</FormLabel>
            : email !== email2?
            <FormLabel m="3px" color="red">Sus emails no coinciden</FormLabel>
            :<FormLabel m="3px" color="green">Sus emails coinciden</FormLabel>
            }
            <FormLabel m="3px">Telefono</FormLabel >
            <Input size="s" w="500px" onChange={(e) => setPhone(e.target.value)}/>
            {(name === "" || email === ""|| phone ===""||email !== email2) ?
            <Tooltip label="Complete el formulario para continuar...">
            <Button isDisabled colorScheme="blue" type="submit" m={3} >
              Realizar Compra
            </Button>
            </Tooltip>
            :
            <Button colorScheme="blue" type="submit" m={3} >
              Realizar Compra
            </Button>
            }
          </form>
        </FormControl>
      </Container>
      {confirm &&
      <Container>
        <div className='modalFondo'>
        </div>
        <CheckOut name={name} email={email} phone={phone} items={items} total={total} />
      </Container>
      }
    </div>
  );
};

export default Form;