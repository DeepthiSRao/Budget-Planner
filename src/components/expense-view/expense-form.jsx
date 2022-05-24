import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addExpense, editCategoryBudget } from '../../actions';
import { formatCategoryOptions } from '../../util/helpers';
import SelectView from './select-view';
import { validate } from './validate';

const initState = {
    expense: {
        amount: 0,
        description: '',
        category: '',
        id: ''
    },
    error:{},
    selectVal: undefined,
}

class ExpenseForm extends Component {
    state = { 
        expense: {
            amount: 0,
            description: '',
            category: '',
            id: ''
        },
        error:{},
        selectVal: undefined,
    }

    handleChange = e => {
        let {name, value} = e.target;

        if(name === 'amount')
            value = parseFloat(value);

        if(name === 'category')
            value = parseInt(value);
  
        this.setState((prevState) =>({
            ...prevState,
            expense: {
                ...prevState.expense,
                [name] : value
            }
        }));

    }

    handleSelect = (value) =>{        
        this.setState((prevState) =>({
            ...prevState,
            expense: {
                ...prevState.expense,
                category : value
            },
            selectVal: undefined
        }));
    }

    handleSubmit = e => {
        const { expense } = this.state;
        const { budgetAmount, totalExpenses} = this.props;

        e.preventDefault();
            
        const err = validate(expense, budgetAmount - totalExpenses);
        this.setState((prevState) =>({
            ...prevState,
            error: {
                ...err
            }
        }));

        //form can be submitted if there are no validation errors. 
        let isValid = Object.values(err).every(error => error.length === 0);
        isValid && this.sendData();
    }

    sendData = () => {
        const { expense } = this.state;

        this.props.dispatch(addExpense({
            ...expense,
            id: uuidv4()
        }));

        // after adding the budget update category balance
        this.props.dispatch(editCategoryBudget({
            id: expense.category,
            amount: expense.amount,
            isAdd: true //add expenses to individual category
        }));

        // clear form and rest selection list after submitting
        this.setState(() =>({
            ...initState,
            selectVal: null
        }));
    }

    render() {
        const { options, budgetAmount } = this.props;
        const { expense, error, selectVal } = this.state;

        return (
            <>
            <p className="fs-5 fw-bold w-100 text-start pb-2">Add Expenses</p>
            <form className="row mb-5 needs-validation" noValidate onSubmit={e => this.handleSubmit(e)}>
                <div className='row mb-3'>
                    <div className='col-4 col-md-3'>
                        <input
                            type='number'
                            name='amount' 
                            value={expense.amount || ''}
                            placeholder="$0.00"
                            required='required'
                            className={`form-control expense-amount ${error.amount ? 'is-invalid' : ''}`}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <div className="invalid-feedback">
                            {error.amount}
                        </div>
                    </div>
                    <div className='col-8 col-md-4'>
                        <input
                            type='text'
                            name='description' 
                            value={expense.description}
                            placeholder="Spent for?"
                            required='required'
                            className={`form-control ${error.description ? 'is-invalid' : ''}`}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <div className="invalid-feedback">
                            {error.description}
                        </div>
                    </div>
                    <div className='col-12 col-md-5 mt-3 mt-md-0'>
                        <SelectView 
                            options={options}
                            value={selectVal}
                            handleSelect={(val) => this.handleSelect(val)}
                            error={error.category}
                        />
                    </div>
                </div>
                <div className='text-center'>
                    <button 
                        type='submit'
                        disabled={budgetAmount === 0}
                        data-bs-toggle="tooltip" 
                        data-bs-placement="right" 
                        title={budgetAmount === 0 ? "Set your budget to add expense" : "Add expense"}
                        className='btn btn-primary col-lg-3 fw-bold text-uppercase'>
                        Submit
                    </button>
                </div>
            </form>
        </>
        );
    }
}
 
const mapStateToProps = ({budget, categories}) => ({
    budgetAmount: budget.amount || 0,
    totalExpenses: categories.reduce((acc,category) => (acc + category.amount),0) || 0,
    options: formatCategoryOptions(categories),
});

export default connect(mapStateToProps)(ExpenseForm);