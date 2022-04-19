import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

interface useShoppingCartArgs {

}

export const useShoppingCart = () => {
	const [ shoppingCart, setShoppingCart ] = useState<{[ key:string ]: ProductInCart}>({});

	const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
		setShoppingCart( oldShoppingCart => {
			const productIncart: ProductInCart = oldShoppingCart[ product.id ] || { ...product, count: 0 };

			if ( Math.max( productIncart.count + count, 0 ) > 0 ) {
				productIncart.count += count;
				return {
					...oldShoppingCart,
					[ product.id ]: productIncart
				}
			}

			const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			return { ...rest }
		})
  }

	return {
		onProductCountChange,
		shoppingCart,
	}
}
