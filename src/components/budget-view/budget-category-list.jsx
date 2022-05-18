import React from 'react';
import { connect } from 'react-redux';
import CategoryItem from './category-item';

const BudgetCategoryList = ({categoryList, budgetAmount}) => {
    return (
        <div className='col-12 mt-4'>
            <p className="fw-bold text-dark">Categories</p>
            {
                categoryList.map(category =>(
                    <CategoryItem key={category.id} category={category} budget={budgetAmount} />
                ))
            }
        </div>
    );
}

const mapStateToProps = ({budget, categories}) =>({
    budgetAmount: budget?.amount || 0,
    categoryList: categories
})

export default connect(mapStateToProps)(BudgetCategoryList);