import React from 'react';
import styles from '@styles/CreateAccount.module.scss';
import Head from 'next/head';

const CreateAccount = () => {
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
              <input type="text" id="name" placeholder="Teff" className={styles.input} />

              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input type="text" id="email" placeholder="platzi@example.com" className={styles.input} />

              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input type="password" id="password" placeholder="*********" className={styles.input} />
            </div>

            <input type="submit" value="Create" className={styles['primary-button']} />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
