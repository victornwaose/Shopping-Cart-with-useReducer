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
        if (!byStock) {
            sortedProducts = sortedProducts?.filter(
                (product) => product.inStock
            );
        }
        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (product) => product.rating >= byRating
            );
        }
        if (searchQuery) {
            // eslint-disable-next-line array-callback-return
            sortedProducts = sortedProducts.filter((product) => {
                product.name.toLowerCase().includes(searchQuery);
            });
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
