import React from 'react';
import { Stack } from 'react-bootstrap';
import BudgetCategoryList from './budget-category-list';
import BudgetForm from './budget-form';
import BudgetProgressBar from './budget-progressbar';
import { DATA as data } from '../../util/data';

const BudgetView = () => {
    return (
        <>
            <Stack gap={3} className="col-md-6">
                <BudgetProgressBar />
                <h2>Your Budget for May 2022 is: <span>$0.00</span></h2>
                <BudgetForm />
                <BudgetCategoryList categoryList={data.categories} budget={data.budget} />
            </Stack>
        </>  
    );
}
 
export default BudgetView;