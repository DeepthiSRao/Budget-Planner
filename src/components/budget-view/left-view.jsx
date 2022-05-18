import React from 'react';
import BudgetForm from './budget-form';
import ExpenseForm from '../expense-view/expense-form';
import ExpenseTable from '../expense-view/expense-table';
import { connect } from 'react-redux';

const LeftView = ({budgetAmount = 0}) => {
    const date = new Date();  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <p className="fs-3 align-self-start mb-5">Your Budget for {month} {year} is: <span className='fw-bold'>${budgetAmount.toFixed(2)}</span></p>
                <BudgetForm />
                <ExpenseForm />
                <ExpenseTable />
            </div>
        </>  
    );
}

const mapStateToProps = ({budget}) => ({
    budgetAmount: budget.amount
});

export default connect(mapStateToProps)(LeftView);