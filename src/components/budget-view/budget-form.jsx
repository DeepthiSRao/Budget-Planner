import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setBudget } from '../../actions';
import './style.css';

const BudgetForm = ({dispatch}) => {
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

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
            <form className="row  g-3 col-12 mb-5 needs-validation" noValidate>
                <div className='input-group flex-nowrap col-md-4 has-validation'>
                    <span className="input-group-text fw-bold">$</span>
                    <input
                        type='number'
                        name='amount'
                        value={amount || ''}
                        placeholder="Add or edit your budget"
                        required='required'
                        className='form-control input-group-prepend text-center'
                        onChange={e => setAmount(e.target.value)}
                    />
                    <div className='invalid-feedback'>
                        Please enter the amount of your budget and Save it.
                    </div>
                </div>
                <div className='col-auto'>
                    <button 
                        type='submit' 
                        className='btn btn-primary fw-bold text-uppercase' 
                        onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
 
export default connect()(BudgetForm);