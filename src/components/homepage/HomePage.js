import React, { useEffect } from "react";

import { CartState } from "../../context/Context";
import FilterProduct from "./FilterProduct";
import SingleProduct from "./SingleProduct";

const HomePage = () => {
    const {
        state: { products },
        productState: { byStock, sort, byFastDelivery, byRating, searchQuery },
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;
        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }
        return sortedProducts;
    };

    return (
        <div className="flex">
            <FilterProduct />
            <div className="flex justify-between flex-wrap">
                {transformProducts()?.map((product) => {
                    return <SingleProduct key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default HomePage;
