import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addExpense } from '../../actions';
import './expenses.css';

const ExpenseForm = ({budgetAmount, categoryList, dispatch}) => {
    const [expense, setExpense] = useState({
        amount: 0,
        description: '',
        category: null,
        id: ''
    });

    // validating error
    const handleChange = e => {
        let {name, value} = e.target;

        if(name === 'amount')
            value = parseFloat(value);

        if(name === 'category')
            value = parseInt(value);
  
        setExpense((prevState) =>({
            ...prevState,
            [name] : value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(addExpense({
            ...expense,
            id: uuidv4()
        }));

        // clear form after submitting
        setExpense({
            amount: 0,
            description: '',
            category: null,
        });
    }

    return ( 
        <>
            <p className="fs-5 fw-bold w-100 text-start">Add Expenses</p>
            <form className="row g-3 col-12 mb-5">
                <div className='col-sm col-lg-2'>
                    <input
                        type='number'
                        name='amount' 
                        value={expense.amount || ''}
                        placeholder="$0.00"
                        required='required'
                        className='form-control'
                        onChange={handleChange}
                    />
                </div>
                <div className='col-sm col-lg-3'>
                    <input
                        type='text'
                        name='description' 
                        value={expense.description}
                        placeholder="Spent for?"
                        required='required'
                        className='form-control'
                        onChange={handleChange}
                    />
                </div>
                <div className='col-sm col-lg-4'>
                    <select 
                        className='form-control form-select category-select'
                        aria-label="select example" 
                        name="category"
                        placeholder='Assign to a category' 
                        onChange={handleChange}>
                        <option key={1} value={null} disabled>Assign to a category</option>
                        {categoryList.map((item, i) => (
                            <option key={i} value={item.id}>
                                {item.name}
                            </option>)
                        )}
                    </select>
                </div>
                <div className='col-auto'>
                    <button type='submit' className='btn btn-primary fw-bold' onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

const mapStateToProps = ({budget, categories}) => ({
    budgetAmount: budget.amount,
    categoryList: categories
});

export default connect(mapStateToProps)(ExpenseForm);