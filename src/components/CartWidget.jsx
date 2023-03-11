import React, { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {

  const [cart, setCart] = useContext(CartContext);

  const cantidad = cart.reduce((acc, curr)=>{
    return acc + curr.cantidad
  }, 0);

  return (
    <div>🛒
        <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
        {cantidad}
        </span>
    </div>
  );
};

export default CartWidget;