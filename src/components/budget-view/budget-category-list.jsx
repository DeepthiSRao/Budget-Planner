import React from 'react';
import { connect } from 'react-redux';
import CategoryItem from '../category-components/category-item';

const BudgetCategoryList = ({categoryList}) => {
    return (
        <div className='col-12 mt-2'>
            <p className="fw-bold text-dark">Categories</p>
            {
                categoryList.map(category =>(
                    <CategoryItem key={category.id} id={category.id} />
                ))
            }
        </div>
    );
}

const mapStateToProps = ({categories}) =>({
    categoryList: categories,
});

export default connect(mapStateToProps)(BudgetCategoryList);