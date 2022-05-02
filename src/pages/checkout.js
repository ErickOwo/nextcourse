import React, {useContext} from 'react';
import Head from 'next/head';

import styles from '@styles/Checkout.module.scss';

import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';

const CheckOut = () => {
  const { state } = useContext(AppContext);

  const totalAdded = ()=>{
    const reducer = (accumulator, currentValue)=> accumulator + currentValue.price;
    const total = state.cart.reduce(reducer, 0);
    return total;
  };

  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <div className={styles.checkout}>
        <div className={styles['checkout-container']}>
          <h1 className={styles.title}>My order</h1>

          <div className={styles['checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>03.25.21</span>
                <span>{state.cart.length} articles</span>
              </p>
              <p>${totalAdded()}</p>
            </div>
          </div>
          <div className={styles['order-items']}>
            {
              state.cart.map(item =>(
                <OrderItem 
                  product={item}
                  key={`orderItemCheckOut-${item.id}`}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
