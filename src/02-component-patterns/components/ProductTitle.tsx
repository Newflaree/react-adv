import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
// Styles and Assets
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string ;
  title?: string;
  style?: CSSProperties;
}

// Deferente forma de pitar el argumento de un función
export const ProductTitle = ({ title, className, style }: Props ) => {
  const { product } = useContext( ProductContext );

  return(
      <span 
        style={ style }
        className={ `${ styles.productDescription } ${ className }` }
      >
        { title ? title : product.title }
      </span>
  );
}
