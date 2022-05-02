import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import styles from '@styles/RecoveryPassword.module.scss';

import emailIcon from '@icons/email.svg';
import logoYard from '@logs/logo_yard_sale.svg';

const RecoveryPassword = () => {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <div className={styles.login}>
        <div className={styles['form-container']}>
          <Image width="100%" height="100%" src={logoYard} alt="logo" className={styles.logo} />

          <h1 className={styles.title}>Email has been sent!</h1>
          <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>

          <div className={styles['email-image']}>
            <Image width="100%" height="100%" src={emailIcon} alt="email" />
          </div>

          <button className={styles['primary-button']}>Login</button>

          <p className={styles.resend}>
            <span>{`Didn't receive the email?`}</span>
            <Link href="/">Resend</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RecoveryPassword;
