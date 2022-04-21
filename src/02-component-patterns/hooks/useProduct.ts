import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface userProductArgs {
	product: Product;
	onChange?: ( args: onChangeArgs ) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: userProductArgs ) => {
  const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
	const isControlled = useRef( !!onChange )

  const increaseBy = ( value: number ) => {
		if ( isControlled.current ) {
			return onChange!({ count: value, product })
		}

		const newValue = Math.max( counter + value, 0 );
    setCounter( newValue );

    onChange && onChange({ count: newValue, product });
  }

	useEffect( () => {
		setCounter( value );

	}, [ value ]);

  return {
    counter, 
    increaseBy
  }
}
