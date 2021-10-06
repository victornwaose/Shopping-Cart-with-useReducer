import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import Rating from "./Rating";

const FilterProduct = () => {
    const [rate, setRate] = useState(2);

    return (
        <div className="  filter  bg-gray-800 text-white p-5 flex flex-col w-1/4 m-1 ">
            <span className=" text-3xl">Filter product</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include out of stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="radio"
                    id={`inline-4`}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating:</label>
                <Rating
                    rating={rate}
                    onClick={(i) => setRate(i + 1)}
                    style={{ cursor: "pointer" }}
                />
            </span>
            <Button variant="light"> Clear Filter </Button>
        </div>
    );
};

export default FilterProduct;
