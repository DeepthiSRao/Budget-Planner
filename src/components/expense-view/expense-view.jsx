import React from 'react';
import ExpenseForm from './expense-form';
import ExpenseTable from './expense-table';
import BudgetForm from './../budget-view/budget-form';

const ExpenseView = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <BudgetForm />
                <ExpenseForm />
                <ExpenseTable />
            </div>
        </>  
    );
}

export default ExpenseView;