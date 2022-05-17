import React from 'react';
import CategoryItem from './category-item';

const BudgetCategoryList = ({categoryList, budget}) => {
    return (
        <>
            {
                categoryList.map(category =>(
                    <CategoryItem key={category.id} category={category} budget={budget} />
                ))
            }
        </>
    );
}
 
export default BudgetCategoryList;