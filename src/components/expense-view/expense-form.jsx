import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { CATEGORY  as category } from '../../util/constants';

const ExpenseForm = () => {
    const [expense, setExpense] = useState({
        'amount': 0,
        'description': '',
        'category': ''
    });

    // validating error
    const handleChange = e => {
        const {name, value} = e.target;

        setExpense((prevState) =>({
            ...prevState,
            [name] : value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(expense); 
    }

    return ( 
        <>
            <Form>
                <Row>
                <Form.Group as={Col} controlId="amount" className="my-1">
                    <Form.Control 
                        type="number" 
                        name="amount" 
                        value={expense.amount || ''}
                        onChange={handleChange}
                        placeholder="$0.00"
                        required />
                </Form.Group>
                <Form.Group as={Col} controlId="description" className="my-1">
                    <Form.Control 
                        type="text" 
                        name="description" 
                        value={expense.description || ''}
                        onChange={handleChange}
                        placeholder="Spent for?"
                        required />
                </Form.Group>
                <Form.Group as={Col} controlId="category" className="my-1">
                    <Form.Select
                        name="category"
                        onChange={handleChange} 
                        defaultValue="Assign to a category">
                        {category.map((item, i) => (
                            <option key={i} value={item.name}>{item.name}</option>)
                        )}
                    </Form.Select>
                </Form.Group>
                <Button
                    type="submit"
                    as={Col}
                    className="submit-btn col-2 my-1"
                    onClick={handleSubmit}>
                        Submit
                </Button>
                </Row>
            </Form>     
        </>
    );
}
 
export default ExpenseForm;