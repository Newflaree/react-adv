// Properties
import { Props as ProductCardProps } from "../components/ProductCard";

import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitlePorps } from "../components/ProductTitle";
import { Props as ProductButtonsProps} from "../components/ProductButtons";

// Interfaces
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps ): JSX.Element;
  Title:   ( Props: ProductTitlePorps ) => JSX.Element;
  Image:   ( Props: ProductImageProps ) => JSX.Element;
  Buttons: ( Props: ProductButtonsProps ) => JSX.Element;
}