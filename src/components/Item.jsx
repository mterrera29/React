import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,img,precio, categoria}) => {
  return (
    <div className='card'>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src={img}
              alt=''
              borderRadius='lg'
              className='imgCard'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'> {nombre} </Heading>
              <Text fontSize='s'>
                {categoria}
              </Text>
              <Text fontSize='xs' color="red.300">
                Stock:
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter  justifyContent='center'>
            <ButtonGroup spacing='1' >
              <Link to={`/item/${id}`}>
                <Button variant='solid' colorScheme='blue' align='center'>
                  Detalles
                </Button>
              </Link >
            </ButtonGroup>
          </CardFooter>
        </Card>
    </div>
  )
}

export default Item