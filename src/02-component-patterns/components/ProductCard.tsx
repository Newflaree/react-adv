import { createContext, CSSProperties, ReactElement } from 'react';
// Custom Hooks
import { useProduct } from '../hooks/useProduct';
// Interfaces
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
// Styles and Assets
import styles from '../styles/styles.module.css';

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
	value?: number;
  onChange?: ( args: onChangeArgs ) => void;
}

export const ProductCard = ({ 
	children, 
	product, 
	className, 
	style, 
	onChange, 
	value 
}: Props ) => {
	const { counter, increaseBy } = useProduct({ onChange, product, value });

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
