import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ( {count, product}: {count: number, product: Product} ) => {

        console.log({count});
        

        setShoppingCart( oldShoppingCart => {
            
            //delete
            if (count === 0) {

                const newShoppingCart = {   ...oldShoppingCart };
                delete newShoppingCart[product.id];
                return newShoppingCart;
                
                // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                // console.log('toDelete', toDelete);
                
                // return rest;
            }

            
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        })
        // console.log('shoppingCart', shoppingCart);
        

    }
    return {
        shoppingCart,
        onProductCountChange,
        
    } 
}

