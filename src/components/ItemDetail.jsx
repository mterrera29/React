import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, 
         CardHeader, 
         CardBody, 
         CardFooter,Stack, Heading, Divider, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount';

const ItemDetail = ({productos}) => {
    const {id} = useParams();
    const productFilter = productos.filter((prod) => prod.id == id);

  return (
    <div>
        
        {
        productFilter.map((prod) =>(
            <div className='detailContainer' key={prod.id}>
                <Card className='cardDetail'>
                  <CardBody  display="flex" flexDir="row" m="3" wrap="wrap">
                    <Image
                      src={prod.img}
                      borderRadius='lg' className='imgDetail'
                      m="5"
                    />
                    <Stack spacing='3'  m="5">
                      <Heading size='md'>{prod.nombre}</Heading>
                      <Text>
                        {prod.descripcion}
                      </Text>
                      <Text fontSize='s'>
                        Categoría: {prod.categoria}
                      </Text>
                      <Text fontSize='xs' color="red.300">
                        Stock:
                      </Text>
                      <Text color='blue.600' fontSize='2xl'>
                        ${prod.precio}
                      </Text>
                  <CardFooter display="flex" alignItems="center" justifyContent="center">
                    <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                        Buy now
                      </Button>
                      <ItemCount/>
                    </ButtonGroup>
                  </CardFooter>
                    </Stack>
                  </CardBody>
                </Card>
            </div >
        ))
        }
    </div>
  )
}

export default ItemDetail