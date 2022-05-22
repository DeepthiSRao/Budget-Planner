import React from 'react';
import  { connect } from 'react-redux';
import NavBar from '../header-view/navbar-view';
import BudgetProgressBar from "../budget-view/budget-progressbar";
import BudgetCategoryList from "../budget-view/budget-category-list";
import ExpenseView from '../expense-view/expense-view';
import '../style.css';

const HomePage = ({expenses, budget}) => {    
    return (
        <>
            <NavBar />
            <div className="container py-4">
                <div class="row">
                    <div className="col-md-6 order-2 order-md-1">
                        <ExpenseView />
                    </div>
                    <div className="col-md-5 offset-md-1 order-1 order-md-2">
                        <BudgetProgressBar />
                        <BudgetCategoryList />
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = ({expenses, budget}) => ({
    expenses,
    budget
});

export default connect(mapStateToProps)(HomePage);