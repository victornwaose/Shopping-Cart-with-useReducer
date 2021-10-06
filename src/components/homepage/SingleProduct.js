import React from "react";
import { Card, Button } from "react-bootstrap";

import Rating from "./Rating";
import { CartState } from "../../context/Context.js";

const SingleProduct = ({ product }) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <div className=" w-1/5 m-3">
            <Card className="card ">
                <Card.Img
                    className=""
                    variant="top"
                    src={product.image}
                    alt={product.img}
                />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>$ {product.price.split(".")[0]}</span>
                        {product.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 days Delivery</div>
                        )}
                        <Rating rating={product.ratings} />
                    </Card.Subtitle>
                    {cart?.some((p) => p.id === product.id) ? (
                        <Button
                            onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: product,
                                });
                            }}
                            variant="danger"
                        >
                            Remove from Cart
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: product,
                                });
                            }}
                            disabled={!product.inStock}
                        >
                            {!product.inStock ? "Out of Stock " : "Add to Cart"}{" "}
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;
