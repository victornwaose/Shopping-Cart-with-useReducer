import React from "react";
import { Card } from "react-bootstrap";

import Rating from "./Rating";

const SingleProduct = ({ product }) => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={product.image} alt={product.img} />
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
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;
