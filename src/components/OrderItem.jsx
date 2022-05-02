import React, { useContext } from 'react';
import Image from 'next/image';
import ProductContext from '@context/ProductsContext';

import iconClose from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

import styles from '@styles/MyOrder.module.scss';

const OrderItem = ({ product })=>{
  const { removeFromCart } = useContext(AppContext);
  const { handleAdd } = useContext(ProductContext); 

  const handleRemove = ()=>{
    removeFromCart(product);
    handleAdd(product.id);
  };
  return(
    <div className={styles['shopping-cart']}>
        <figure>
          <Image 
          loader={()=> `${product.images[0]}?w=${100}&q=${75}`}
          width='100%' 
          height='100%'
          src={product.images[0]} 
          alt='bike' 
          />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <Image width='15px' height='15px'
        src={iconClose} 
        alt='close' 
        onClick={handleRemove} />
      </div>
  );
};

export default OrderItem;