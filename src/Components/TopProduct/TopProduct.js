import React from "react";
import { Card } from "react-bootstrap";
import './TopProduct.css';
import { AiFillFire } from "react-icons/ai";

const TopProduct = ({ perfume }) => {
    const { name, img, sold, price } = perfume;
    return (
        <div className="col-md-6 col-lg-4 d-flex justify-content-center top-product my-3">
            <Card style={{ width: "18rem" }}>
            <Card.Header className="top-product-header">Highest Sold</Card.Header>
                <Card.Img variant="top" src={img} />
                <Card.Body className="my-3">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Card.Text>
                        Sold: {sold} <AiFillFire className="mb-1" style={{color: '#FF454C'}}></AiFillFire>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TopProduct;
