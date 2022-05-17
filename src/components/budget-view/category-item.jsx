import React from 'react';
import { Col, ProgressBar, Row } from "react-bootstrap";
import './budget.css';

const CategoryItem = ({category, budget}) => {
    const {name, amount, color} = category;
    const progress = (amount/budget *100).toFixed(2);
    console.log(amount, budget, Math.floor(amount/budget) * 100);

    return (
        <>
            <Row>
                <Col md={1}>
                    <div className="category col-md-1" style={{background:color}}></div>
                </Col>
                <Col md={6}>
                    <div>{name}</div>
                    <ProgressBar now={progress} label={`${progress}%`} />
                    <div>Spent ${amount.toFixed(2)}</div>
                    <div>{`${progress}%`}</div>
                </Col>
            </Row>
        </>
    );
}
 
export default CategoryItem;