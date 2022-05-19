import React, { useState } from 'react';
import { Modal, 
         Button, 
         Form, 
         Row, 
         Col,
         } from 'react-bootstrap'
import { connect } from 'react-redux';
import { editCategoryBudget, editExpense } from '../../actions';
import './budget.css';

const EditModal = ({category, data, dispatch}) => {
    const [expense, setExpense] = useState({
        amount: `${data.expense.amount}` || 0,
        description: `${data.expense.description}` || '',
        category: `${data.expense.category}` || 1,
        id: `${data.expense.id}`,
    });

    const handleChange = e => {
        let {name, value} = e.target;

        if(name === 'amount')
            value = parseFloat(value);

        if(name === 'category')
            value = parseInt(value);
  
        setExpense((prevState) =>({
            ...prevState,
            [name]: value,
            updated: true
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        // parse category value before assigning
        expense.category= parseInt(expense.category)

        //updated expense and close the modal
        dispatch(editExpense(expense));
        // after updating the expense update category balance with difference
        dispatch(editCategoryBudget({
            id: expense.category,
            amount: (expense.amount - data.expense.amount),
            isAdd: true //add expenses to individual category
        }));

        data.toggle();
    }

    return(
        <>
            <Modal show={data.isOpen} onHide={data.toggle} centered closebutton={true}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column'>
                    <p>Edit expenses details:</p> 
                    <Form className="mt-1">
                        <Row>
                            <Form.Group as={Col} controlId="amount" className="my-1">
                                <Form.Control 
                                    type="number" 
                                    name="amount" 
                                    value={expense.amount}
                                    onChange={handleChange}
                                    placeholder="$0.00"
                                    required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="description" className="my-1">
                                <Form.Control 
                                    type="text" 
                                    name="description" 
                                    value={expense.description}
                                    onChange={handleChange}
                                    placeholder="Spent for?"
                                    required />
                            </Form.Group>
                        </Row>
                        <Row className='mt-4'>
                            <Form.Group as={Col} controlId="category" className="my-1">
                                <Form.Select
                                    name="category"
                                    onChange={handleChange}>
                                    <option key={1} value={null} disabled>Assign to a category</option>
                                    {category.map((item, i) => (
                                        <option key={i} value={item.name}>{item.name}</option>)
                                    )}
                                </Form.Select>
                            </Form.Group>
                        </Row>    
                        <Row className='mt-4'>
                            <Button
                                type="submit"
                                className="primary-btn col-3 fw-bold mx-auto"
                                onClick={handleSubmit}>
                                    Submit
                            </Button>
                        </Row>                          
                    </Form>     
                </Modal.Body>
            </Modal>
        </>
    );
}

const mapStateToProps = ({categories}, ownProps) => ({
    category: categories,
    data: ownProps
});

export default connect(mapStateToProps)(EditModal);