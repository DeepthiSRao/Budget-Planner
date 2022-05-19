import React from 'react';
import  { connect } from 'react-redux';
import NavBar from '../header-view/navbar-view';
import LeftView from '../budget-view/left-view';
import RightView from '../expense-view/right-view';

const HomePage = ({expenses, budget}) => {    
    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="row">
                    <div className="col-8"><LeftView /></div>
                    <div className="col-4"><RightView /></div>
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