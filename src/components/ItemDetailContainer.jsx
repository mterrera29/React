import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Spinner } from '@chakra-ui/react';
import { getFirestore,  getDocs, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "productos");
    getDocs(productCollection).then((querySnapshot) => {
      const product = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(product);
      setLoading(false)
    });
  }, []);
  
  return( loading? 
    <div className='spinner'><Spinner/></div>
    :<div><ItemDetail productos={product} /></div>
  );
};

export default ItemDetailContainer;