import React, { useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import logo from '@logs/logo_yard_sale.svg';

import styles from '@styles/Login.module.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <div className={styles.login}>
        <div className={styles['form-container']}>
          <Image width="100px" height="40px" src={logo} alt="logo" className={styles.logo} priority="false" />

          <form action="/" className={styles.form} ref={form}>
            <label htmlFor="email" className={styles.label}>
              Email address
            </label>
            <input type="email" name="email" placeholder="platzi@example.cm" className={styles['input']} autoComplete="off" />

            <label htmlFor="password" className={styles.label} autoComplete="off">
              Password
            </label>
            <input type="password" name="password" placeholder="*********" className={styles['input']} />

            <input type="submit" value="Log in" className={styles['primary-button']} onClick={handleSubmit} />
            <Link href="/">Forgot my password</Link>
          </form>

          <button className={styles['secondary-button']}>Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Login;
