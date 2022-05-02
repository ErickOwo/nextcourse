import React from 'react';
import Link from 'next/link';
import styles from '@styles/MobileMenu.module.scss';
import iconMenu from '@icons/icon_menu.svg';

const MobileMenu = ( { handleToggleMenu } )=>{
  return(
    <div className={styles.overlay}>
      <div className={styles['mobile-menu']}>
        <img width='25px' height='25px'src={iconMenu.src} className={styles['icon-menu']} onClick={handleToggleMenu} />
        <ul>
          <li>
            <Link href='/'>CATEGORIES</Link>
          </li>
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
            <Link href='/'>Other</Link>
          </li>
        </ul>

        <ul>
          <li>
            <a href='/'>My orders</a>
          </li>
          <li>
            <a href='/'>My account</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href='/' className={styles.email}>
              platzi@example.com
            </a>
          </li>
          <li>
            <a href='/' className={styles['sign-out']}>
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;