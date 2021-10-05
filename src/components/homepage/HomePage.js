import React from "react";

import { CartState } from "../../context/Context";
import FilterProduct from "./FilterProduct";
import SingleProduct from "./SingleProduct";

const HomePage = () => {
    const {
        state: { products },
    } = CartState();

    return (
        <div className="flex">
            <FilterProduct />
            <div className="flex w-3/4   p-5 flex-wrap justify-around">
                {products?.map((product) => {
                    return <SingleProduct key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default HomePage;
