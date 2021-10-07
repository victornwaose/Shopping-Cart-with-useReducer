import React, { useState, useEffect } from "react";
import { ListGroup, Button, Row, Col, Form } from "react-bootstrap";

import { CartState } from "../../context/Context";
import Rating from "../homepage/Rating";

const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [total, setTotal] = useState("");

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    return (
        <div className="flex">
            <div>
                {
                    <ListGroup>
                        {cart?.map((product) => (
                            <ListGroup.Item key={product.id}>
                                <Row>
                                    <Col md={2}>
                                        <img
                                            src={product.image}
                                            alt={product.id}
                                            fluid
                                            rounded
                                        />
                                    </Col>
                                    <Col md={2}>
                                        <span>{product.name}</span>
                                    </Col>
                                    <Col md={2}>${product.price}</Col>
                                    <Col md={2}>
                                        <Rating rating={product.ratings} />
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={product.qty}
                                        >
                                            {[
                                                ...Array(
                                                    product.inStock
                                                ).keys(),
                                            ].map((x) => (
                                                <option Key={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: product,
                                                })
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                }
            </div>
            <div className=" summary">
                <span className="title">
                    subtotal(
                    {cart?.length > 1
                        ? `${cart?.length}items`
                        : `${cart?.length}item`}
                    )
                </span>
                <span style={{ fontWeight: 700, fontSize: 20 }}> ${total}</span>
                <Button type="button" disabled={cart?.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
};

export default Cart;
