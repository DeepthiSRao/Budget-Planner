import React from 'react';
import  { connect } from 'react-redux';
import NavBar from '../header-view/navbar-view';
import ExpenseView from '../budget-view/expense-view';
import ProgressView from '../expense-view/progress-view';

const HomePage = ({expenses, budget}) => {    
    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6"><ExpenseView /></div>
                    <div className="col-md-4 offset-md-1"><ProgressView /></div>
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