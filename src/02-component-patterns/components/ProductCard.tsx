import { createContext, CSSProperties, ReactElement } from 'react';
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
  style?: CSSProperties;
  onChange?: () => void;
}

export const ProductCard = ({ children, product, className, style, onChange }: Props ) => {
  const { counter, increaseBy } = useProduct( onChange );

  return (
    <Provider value={{
      counter,
      product,
      increaseBy
    }}>
      <div 
        style={ style }
        className={ `${ styles.productCard} ${ className }` }
      >
        { children }
      </div>
    </Provider>
  );
}