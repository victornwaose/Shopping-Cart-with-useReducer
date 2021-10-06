import React from "react";
import { ListGroup } from "react-bootstrap";

import { CartState } from "../../context/Context";

const Cart = () => {
    const {
        state: { cart },
    } = CartState();

    return (
        <div>
            <div>
                {
                    <ListGroup>
                        {cart?.map((product) => (
                            <span>{product.name}</span>
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
            </div>
        </div>
    );
};

export default Cart;
