import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addExpense, editCategoryBudget } from '../../actions';
import { formatCategoryOptions } from '../../util/helpers';
import SelectView from './select-view';
  
const ExpenseForm = ({budgetAmount, categoryList, dispatch}) => {
    const [expense, setExpense] = useState({
        amount: 0,
        description: '',
        category: '',
        id: ''
    });
    const [error, setError] = useState({});
    const options = formatCategoryOptions(categoryList);
    const [selectVal, setSelectVal] = useState(options.value);

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

    const handleSelect = (value) =>{
        setSelectVal(options.value);
        expense.category = value;
        console.log(selectVal);
    }

    const handleSubmit = e => {
        e.preventDefault();

        // validate for error
        
        dispatch(addExpense({
            ...expense,
            id: uuidv4()
        }));

        // after adding the budget update category balance
        dispatch(editCategoryBudget({
            id: expense.category,
            amount: expense.amount,
            isAdd: true //add expenses to individual category
        }));

        setSelectVal(null);
        // clear form and rest selection list after submitting
        setExpense({
            amount: 0,
            description: '',
            category: '',
            id: ''
        });

    }

    return ( 
        <>
            <p className="fs-5 fw-bold w-100 text-start pb-2">Add Expenses</p>
            <form className="row mb-5" onSubmit={handleSubmit}>
                <div className='row mb-3'>
                    <div className='col-4 col-md-3'>
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
                    <div className='col-8 col-md-4'>
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
                    <div className='col-12 col-md-5 mt-3 mt-md-0'>
                        <SelectView 
                            options={options}
                            value={selectVal}
                            handleSelect={handleSelect} 
                        />
                    </div>
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-primary col-lg-3 fw-bold text-uppercase'>
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