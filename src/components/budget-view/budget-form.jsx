import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setBudget } from '../../actions';
import '../style.css';

const BudgetForm = ({budgetAmount, dispatch}) => {
    const [amount, setAmount] = useState(0);
    const date = new Date();  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const handleSubmit = e => {
        e.preventDefault();

        const budget = {
            id: uuidv4(),
            amount: parseInt(amount),
            date: new Date().toString()
        }

        dispatch(setBudget(budget));
        setAmount(0);
    }

    return ( 
        <>
            <p className="fs-3 align-self-start mb-5">Your Budget for {month} {year} is: <span className='text-primary fw-bold'>${budgetAmount.toFixed(2)}</span></p>
            <form className="row g-3 w-100 mb-5 needs-validation" noValidate>
                {/* <button 
                   type="button"
                    className='btn btn-outline-primary fw-bold text-uppercase col-lg-3 col-sm-6'>
                    {month} {year}
                </button> */}
                <div className='col-8 budget-form'>
                    <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input
                            type='number'
                            name='amount'
                            value={amount || ''}
                            placeholder="Add or edit your budget"
                            required='required'
                            className='form-control input-group-prepend text-center'
                            onChange={e => setAmount(e.target.value)}
                        />
                    </div>
                </div>
                <button 
                    type='submit' 
                    className='btn btn-primary fw-bold text-uppercase col-3' 
                    onClick={handleSubmit}>
                    Save
                </button>
            </form>
        </> 
    );
}

const mapStateToProps = ({budget}) => ({
    budgetAmount: budget.amount ?? 0
});

export default connect(mapStateToProps)(BudgetForm);