import React from 'react';
import BudgetCategoryList from './budget-category-list';
import BudgetForm from './budget-form';
import BudgetProgressBar from './budget-progressbar';
import { DATA as data } from '../../util/data';

const BudgetView = () => {
    return (
        <>
            <div className="col-12">
                <BudgetProgressBar />
                <p className="fs-3">Your Budget for May 2022 is: <span className='text-primary fw-bold'>$0.00</span></p>
                <BudgetForm />
                <BudgetCategoryList categoryList={data.categories} budget={data.budget} />
            </div>
        </>  
    );
}
 
export default BudgetView;