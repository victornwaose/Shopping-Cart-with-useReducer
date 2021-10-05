import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className=" bg-gray-600">
            <header className=" pt-3  pb-3 ml-auto mr-auto w-4/5 flex justify-between align-center">
                <Link to="/" className="text-gray-50">
                    {" "}
                    Shopping Cart{" "}
                </Link>
                <div>
                    <input
                        type="text"
                        placeholder="Search for a product"
                        className="bg-white  rounded-sm w-60 pl-2 h-8"
                    />
                </div>
                <div className="relative">
                    <FaShoppingCart className="w-6 h-6 bg-green-700" />
                    <h1 className="absolute -top-4 left-5">6</h1>
                </div>
            </header>
        </div>
    );
};

export default Header;
