import { createContext } from 'react';
// Custom Hooks
import { useProduct } from '../hooks/useProduct';
// Interfaces
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
// Styles and Assets
import styles from '../styles/styles.module.css';

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps ) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      product,
      increaseBy
    }}>
      <div className={ styles.productCard }>
        { children }
      </div>
    </Provider>
  );
}