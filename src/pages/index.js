import Head from 'next/head';
import ProductList from '@containers/ProductList';

export default function App() {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <ProductList />
    </>
  );
}
