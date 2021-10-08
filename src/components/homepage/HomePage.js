import React, {useEffect} from "react";

import { CartState } from "../../context/Context";
import FilterProduct from "./FilterProduct";
import SingleProduct from "./SingleProduct";

const HomePage = () => {
    const {
        state: { products },
    } = CartState();
   useEffect(()=> {
    window.title="homepage"
         }, [])
    return (
         
     
        <div className="flex">
            <FilterProduct />
            <div className="flex justify-between flex-wrap">
                {products?.map((product) => {
                    return <SingleProduct key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default HomePage;
