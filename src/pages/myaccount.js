import React from 'react';
import Head from 'next/head';

import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <div className={styles.login}>
        <div className={styles['form-container']}>
          <h1 className={styles.title}>My account</h1>

          <form action="/" className={styles.form}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <p className={styles.value}>Camila Yokoo</p>

              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <p className={styles.value}>camilayokoo@gmail.com</p>

              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <p className={styles.value}>*********</p>
            </div>

            <input type="submit" value="Edit" className={styles['secondary-button']} />
          </form>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
