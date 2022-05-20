import React from 'react';
import BudgetProgressBar from "../budget-view/budget-progressbar";
import BudgetCategoryList from "../budget-view/budget-category-list";

const ProgressView = ({data}) => {
    return (
        <div className="col-12">
            <BudgetProgressBar />
            <BudgetCategoryList />
        </div>
    );
}
 
export default ProgressView;