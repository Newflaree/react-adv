import { createContext, ReactElement } from 'react';
// Custom Hooks
import { useProduct } from '../hooks/useProduct';
// Interfaces
import { Product, ProductContextProps } from '../interfaces/interfaces';
// Styles and Assets
import styles from '../styles/styles.module.css';

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductCard = ({ children, product, className }: Props ) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      product,
      increaseBy
    }}>
      <div className={ `${ styles.productCard} ${ className }` }>
        { children }
      </div>
    </Provider>
  );
}