import React from 'react';
import  { connect } from 'react-redux';
import NavBar from '../header-view/navbar-view';
import RightView from '../expense-view/right-view';
import ExpenseView from '../budget-view/expense-view';

const HomePage = ({expenses, budget}) => {    
    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="row">
                    <div className="col-7"><ExpenseView /></div>
                    <div className="col-5"><RightView /></div>
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