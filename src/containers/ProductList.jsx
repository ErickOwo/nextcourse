import React, {useContext} from 'react';
import ProductsContext from '@context/ProductsContext';
import ProductItem from '@components/ProductItem';
import styles from '@styles/Orders.module.scss';

const ProductList = ()=>{
  const {products} = useContext(ProductsContext); 

  return(
    <section className={styles['main-container']}>
      <div className={styles['cards-container']}>

        {
          products.map(product=>(
          <ProductItem 
            product = {product}
            key = {product.id}
            added = {product.added}
          />
          )
        )}
      </div>
    </section>
  );
}

export default ProductList;