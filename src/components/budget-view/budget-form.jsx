import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <form class="row g-3">
                <div className='col-sm col-lg-6'>
                    <input
                        type='number'
                        name='amount' 
                        value={budget.amount || ''}
                        placeholder="$Add or edit your budget"
                        required='required'
                        className='form-control input-group-prepend'
                        onChange={handleChange}
                    />
                </div>
                <div className='col-auto'>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
 
export default BudgetForm;