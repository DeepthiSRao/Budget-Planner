import React from 'react';
import ExpenseForm from "./expense-form";
import ExpenseTable from "./expense-table";

const ExpenseView = () => {
    return (
        <div className="col-12">
            <ExpenseForm />
            <ExpenseTable />
        </div>
    );
}
 
export default ExpenseView;