import React from 'react';
import BudgetProgressBar from "./../budget-view/budget-progressbar";
import BudgetCategoryList from "./../budget-view/budget-category-list";

const RightView = ({data}) => {
    return (
        <div className="col-12">
            <BudgetProgressBar />
            <BudgetCategoryList />
        </div>
    );
}
 
export default RightView;