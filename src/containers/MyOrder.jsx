import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';

import OrderItem from '@components/OrderItem';

import iconArrow from '@icons/flechita.svg';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ closeToggleOrders })=>{
  const { state } = useContext(AppContext);

  const totalAdded = ()=>{
    const reducer = (accumulator, currentValue)=> accumulator + currentValue.price;
    const total = state.cart.reduce(reducer, 0);
    return total;
  };

  return( 
    <aside className={styles['product-detail']}>
    <div className={styles['title-container']}>
      <Image 
      width='15px' 
      height='10px'
      src={iconArrow} 
      alt='arrow' onClick={closeToggleOrders} />
      <p className={styles.title}>My order</p>
    </div>
    <div className={styles['my-order-content']}>
      {
        state.cart.map(item=>(
          <OrderItem
            product={item}
            key={`orderItem-${item.id}`}
          />
        ))
      }
    </div>
    <div className={styles.order}>
        <p>
          <span>Total</span>
        </p>
        <p>${totalAdded()}</p>
      </div>

      <Link href='/checkout' >
        <button className={styles['primary-button']}
         onClick={closeToggleOrders} >
          Checkout
        </button>
      </Link>
    </aside>
  );
};

export default MyOrder;