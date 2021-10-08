import React from "react";
import { Nav, Dropdown, Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import { CartState } from "../../context/Context";

const Header = () => {
    const {
        state: { cart },
        productDispatch,
        dispatch,
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
                        onChange= {(e) =>
                            productDispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value,
                            })
                        }
                    />
                </div>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart className="text-white text-2xl" />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length > 0 ? (
                                <>
                                    {cart?.map((product) => (
                                        <span
                                            className="flex justify-between align-middle mt-0 ml-3 mr-3  mb-3"
                                            key={product.id}
                                        >
                                            <img
                                                src={product.image}
                                                className="cartItemImg"
                                                alt={product.name}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{product.name}</span>
                                                <span>
                                                    $
                                                    {
                                                        product.price.split(
                                                            "."
                                                        )[0]
                                                    }
                                                </span>
                                            </div>
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: product,
                                                    })
                                                }
                                            />
                                        </span>
                                    ))}
                                    <Link to="/cart">
                                        <Button
                                            style={{
                                                width: "95%",
                                                margin: "0 10px",
                                            }}
                                        >
                                            Go to Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>
                                    Cart is empty
                                </span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </header>
        </div>
    );
};

export default Header;
