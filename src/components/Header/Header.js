import React from "react";
import { Nav, Dropdown, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { CartState } from "../../context/Context";

const Header = () => {
    const {
        state: { cart },
    } = CartState();

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
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart className="text-white text-2xl" />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}>Cart is empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </header>
        </div>
    );
};

export default Header;
