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
                <div className="d-none d-sm-block">
                    <div className="row">
                        <div className="col-md-6">
                            <ExpenseView />
                        </div>
                        <div className="col-md-5">
                            <BudgetProgressBar />
                            <BudgetCategoryList />
                        </div>
                    </div>
                </div>
                <div className="d-md-none">
                    <div className="row g-3">
                        <div className="col-md-10">
                            <BudgetProgressBar />
                            <ExpenseView />
                            <BudgetCategoryList />
                        </div>
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