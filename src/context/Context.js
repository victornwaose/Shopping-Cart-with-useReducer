import { createContext, useContext, useReducer } from "react";
import faker from "faker";

import { cartReducer } from "./Reducer";

const Cart = createContext();

export const CartState = () => {
    return useContext(Cart);
};

export const Context = ({ children }) => {
    const products = [...Array(30)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement(0, 3, 5, 9, 10),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.random.arrayElement(1, 2, 3, 4, 5),
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    return (
        <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    );
};
