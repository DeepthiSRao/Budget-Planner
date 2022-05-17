import React, { useState } from 'react';
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
            <p className="fs-5 fw-bold">Add Expenses</p>
            <form class="row g-3 col-12">
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
                <div className='col-sm col-lg-4'>
                    <input
                        type='text'
                        name='description' 
                        value={expense.description || ''}
                        placeholder="Spent for?"
                        required='required'
                        className='form-control'
                        onChange={handleChange}
                    />
                </div>
                <div className='col-sm col-lg-4'>
                    <select 
                        className="form-control form-select" 
                        aria-label="select example" 
                        name="category" 
                        onChange={handleChange}>
                            <option selected>Assign to a category</option>
                            {category.map((item, i) => (
                                <option key={i} value={item.name}>{item.name}</option>)
                            )}
                    </select>
                </div>
                <div className='col-auto'>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}
 
export default ExpenseForm;