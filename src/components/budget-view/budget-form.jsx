import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setBudget } from '../../actions';
import SuccessModal from './sucess-modal';
import '../style.css';

const BudgetForm = ({budgetAmount, dispatch}) => {
    const [amount, setAmount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState({});

    // for displaying date
    const date = new Date();  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const handleSubmit = e => {
        e.preventDefault();
        if(parseInt(amount) !== 0){
            const budget = {
                id: uuidv4(),
                amount: parseInt(amount),
                date: new Date().toString()
            }
    
            dispatch(setBudget(budget));
            // reset input, error object & show the success message
            setAmount(0);
            setError({});
            toggleModal();
        }else{
            setError({
                amount: 'Monthly Budget amount must be greater than zero'
            });
        }
    }

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    } 

    return ( 
        <>
            <p className="fs-3 align-self-start mb-5">Your Budget for {month} {year} is: <span className='text-primary fw-bold'>${budgetAmount.toFixed(2)}</span></p>
            <form className="w-100 mb-5 needs-validation" noValidate>
                {/* <button 
                   type="button"
                    className='btn btn-outline-primary fw-bold text-uppercase col-lg-3 col-sm-6'>
                    {month} {year}
                </button> */}
                <div className='row budget-form'>
                    <div className='col-8'>
                        {error.amount
                            &&
                            <label htmlFor="budget-field" className="form-label">
                                Add or edit your budget
                            </label>
                        }
                        <div className="input-group has-validation" id='budget-field'>
                            <span className="input-group-text" id="inputGroupPrepend">$</span>
                            <input 
                                type='number'
                                name='amount'
                                value={amount || ''}
                                onChange={e => setAmount(e.target.value)}
                                placeholder='Add or edit your budget'
                                className={ error.amount ? 'form-control is-invalid' : 'form-control'}
                                id="validationCustomUsername" 
                                aria-describedby="inputGroupPrepend" 
                                required />
                            <div className="invalid-feedback">
                                {error.amount}
                            </div>
                        </div>
                    </div>               
                    <button 
                        type='submit' 
                        className='btn btn-primary fw-bold text-uppercase col-3 align-self-center' 
                        onClick={handleSubmit}>
                        Save
                    </button>
                </div>
               
            </form>   
            <SuccessModal
                isOpen={showModal}
                toggle={toggleModal}
            />
        </> 
    );
}

const mapStateToProps = ({budget}) => ({
    budgetAmount: budget.amount ?? 0
});

export default connect(mapStateToProps)(BudgetForm);