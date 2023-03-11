import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Card,
  CardBody, 
  CardFooter,
  Stack, 
  Heading, 
  ButtonGroup,
  Image, 
  Text 
} from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState} from "react";

const ItemDetail = ({productos}) => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  const productFilter = productos.filter((prod) => prod.id == id);

  useEffect(() => {
    const db = getFirestore();
    const prodRef = doc(db, "productos", `${id}`);
    getDoc(prodRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  },[]);
  
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
                    Stock: {prod.stock}
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    ${prod.precio}
                  </Text>
              <CardFooter display="flex" alignItems="center" justifyContent="center">
                <ButtonGroup spacing='2'>
                  <ItemCount stock={prod.stock} id={prod.id} nombre={prod.nombre} precio={prod.precio} img={prod.img}/>
                </ButtonGroup>
              </CardFooter>
                </Stack>
              </CardBody>
            </Card>
        </div >
      ))
      };
    </div>
  );
};

export default ItemDetail;