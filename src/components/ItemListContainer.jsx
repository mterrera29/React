import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {

  const {cat} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "productos");
    getDocs(productCollection).then((querySnapshot) => {
      const producto = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(producto);
      setLoading(false)
    });
  }, []);
  
  const filtroCategoria = product.filter((productos) => productos.cat === cat);

  return (
    <div>
      {loading? 
      <div className='spinner'><Spinner/></div>
      : (cat ? <ItemList productos={filtroCategoria}/> : <ItemList productos={product}/>)}
    </div>
  );
};

export default ItemListContainer;