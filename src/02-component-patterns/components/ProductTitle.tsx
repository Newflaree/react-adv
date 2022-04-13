import { useContext } from "react";
import { ProductContext } from "./ProductCard";
// Styles and Assets
import styles from '../styles/styles.module.css';

// Deferente forma de pitar el argumento de un función
export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext( ProductContext );

  return(
      <span 
        className={ styles.productDescription }
      >
        { title ? title : product.title }
      </span>
  );
}
