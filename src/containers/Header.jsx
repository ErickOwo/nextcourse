import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import AppContext from '@context/AppContext';

import iconMenu from '@icons/icon_menu.svg';
import logoYardSale from '@logs/logo_yard_sale.svg';
import iconShoppingCard from '@icons/icon_shopping_cart.svg';

import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import MobileMenu from '@containers/MobileMenu';

import styles from '@styles/Header.module.scss';

const Header =()=>{
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const { state } = useContext(AppContext);

  const handleToggleMenu = ()=>{
      setToggleMenu(!toggleMenu);
  }

  const handleToggle = ()=>{
    setToggle(!toggle);
    if(toggleOrders) setToggleOrders(!toggleOrders);
  }

  const handleToggleOrders = ()=>{
    setToggleOrders(!toggleOrders);
    if(toggle) setToggle(!toggle);
  }

  return(
    <>
      {
        toggleMenu && <MobileMenu 
        handleToggleMenu={handleToggleMenu} />
      }
      <nav className={styles.Nav}>
        <img
          width='25px'
          height='25px' 
          onClick={handleToggleMenu} 
          src={iconMenu.src} 
          alt='menu' 
          className={styles.menu} />
        <div className={styles['navbar-left']}>
          <Link href='/'>
            <Image
            priority='false'
            width='100px' 
            height='20px'
            src={logoYardSale} 
            alt='logo' 
            className={styles['nav-logo-img']} />
          </Link>
          <ul>
            <li>
              <Link href='/'>All</Link>
            </li>
            <li>
              <Link href='/'>Clothes</Link>
            </li>
            <li>
              <Link href='/'>Electronics</Link>
            </li>
            <li>
              <Link href='/'>Furnitures</Link>
            </li>
            <li>
              <Link href='/'>Toys</Link>
            </li>
            <li>
              <Link href='/'>Others</Link>
            </li>
          </ul>
        </div>

        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']} onClick={handleToggle}>platzi@example.com</li>
            <li
              className={styles['navbar-shopping-cart']}
              onClick={() => handleToggleOrders()}
            >
              <Image 
              width='25px' 
              height='25px'
              src={iconShoppingCard} 
              alt='shopping cart' />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder closeToggleOrders={handleToggleOrders} />}
      </nav>
    </>
  );
}

export default Header;