import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface userProductArgs {
	product: Product;
	onChange?: ( args: onChangeArgs ) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: userProductArgs ) => {
  const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
	const isMounted = useRef( false );

	console.log( initialValues?.count );

  const increaseBy = ( value: number ) => {
	  let newValue = Math.max( counter + value, 0 );
    if ( initialValues?.maxCount ) {
      newValue = Math.min( newValue, initialValues.maxCount );
    }

    setCounter( newValue );
    onChange && onChange({ count: newValue, product });
  }

	useEffect( () => {
		if ( !isMounted.current ) return;

		setCounter( value );
	}, [ value ]);

	useEffect( () => {
		isMounted.current = true;
	}, [] );

  return {
    counter, 
    increaseBy
  }
}
