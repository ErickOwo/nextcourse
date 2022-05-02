import React, { useContext } from 'react';
import Image from 'next/image';

import cardIconAdd from '@icons/bt_add_to_cart.svg';
import cardIconAdded from '@icons/bt_added_to_cart.svg';

import AppContext from '@context/AppContext';
import ProductsContext from '@context/ProductsContext';

import styles from '@styles/Orders.module.scss';

const ProductItem = ({ product, added })=>{
  const { addToCart, removeFromCart } = useContext(AppContext);
  const { handleAdd } = useContext(ProductsContext);

  const handleClickCart = () =>{
    if(!added) addToCart(product);
    else removeFromCart(product);
  };

  return(
    <div className={styles['product-card']}>
      <Image 
      loader={()=> `${product.images[0]}?w=${100}&q=${75}`}
      width='100%' 
      height='100%'
      src={product.images[0]} 
      alt={product.title}
      layout='responsive'
      priority='false' />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure>
          <Image 
          width='35px' 
          height='35px'
          src={added ? cardIconAdded : cardIconAdd} 
          alt="" 
          onClick={ ()=> {
            handleClickCart();
            handleAdd(product.id);
          } }
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;