import '@styles/globals.css';
import AppContext from '@context/AppContext';
import ProductsContext from '@context/ProductsContext';
import useInitialState from '@hooks/useInitialState';
import useGetProducts from '@hooks/useGetProducts';
import Header from '@containers/Header';

const API = 'https://api.escuelajs.co/api/v1/products';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  const initialProducts = useGetProducts(API);
  return (
    <AppContext.Provider value={initialState}>
      <ProductsContext.Provider value={initialProducts}>
        <Header />
        <Component {...pageProps} />
      </ProductsContext.Provider>
    </AppContext.Provider>
  );
}

export default MyApp;
