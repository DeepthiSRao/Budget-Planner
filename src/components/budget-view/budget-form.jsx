import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const BudgetForm = () => {
    const [budget, setBudget] = useState({
        'amount': 0,
    });

    // validating error
    const handleChange = e => {
        const {name, value} = e.target;

        setBudget((prevState) =>({
            [name] : value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(budget); 
    }

    return ( 
        <>
            <div className='form'>
                <div></div>
            </div>
            <Form>
                <Row>
                <Form.Group as={Col} controlId="amount" className="my-1">
                    <Form.Control 
                        type="number" 
                        name="amount" 
                        value={budget.amount || ''}
                        onChange={handleChange}
                        placeholder="$Add or edit your budget"
                        required />
                </Form.Group>
                <Button
                    type="submit"
                    as={Col}
                    className="submit-btn col-3 my-1"
                    onClick={handleSubmit}>
                        Save
                </Button>
                </Row>
            </Form>     
        </>
    );
}
 
export default BudgetForm;