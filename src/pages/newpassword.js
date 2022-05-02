import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '@styles/NewPassword.module.scss';

import logoYard from '@logs/logo_yard_sale.svg';

const Nexpassword = () => {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <div className={styles.login}>
        <div className={styles['form-container']}>
          <Image width="100%" height="100%" src={logoYard} alt="logo" className={styles.logo} />

          <h1 className={styles.title}>Create a new password</h1>
          <p className={styles.subtitle}>Enter a new password for your account</p>

          <form action="/" className={styles.form}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input type="password" id="password" placeholder="*********" className={styles.input} />

            <label htmlFor="new-password" className={styles.label}>
              Password
            </label>
            <input type="password" id="new-password" placeholder="*********" className={styles.input} />

            <input type="submit" value="Confirm" className={styles['primary-button']} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Nexpassword;
