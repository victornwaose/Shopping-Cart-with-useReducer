import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <div className=" bg-gray-600">
            <header className=" pt-3  pb-3 ml-auto mr-auto w-4/5 flex justify-between align-center">
                <h1 className="text-gray-50">Shopping Cart</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search for a product"
                        className="bg-white  rounded-sm w-60 pl-2 h-8"
                    />
                </div>
                <div>
                    <FaShoppingCart className="w-6 h-6 bg-green-700" />
                </div>
            </header>
        </div>
    );
};

export default Header;
