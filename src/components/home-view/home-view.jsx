import React, { useEffect, useState } from 'react';

import NavBar from '../header-view/navbar-view';
import  { connect } from 'react-redux'
import LeftView from '../budget-view/left-view';
import RightView from '../expense-view/right-view';

const HomePage = ({expenses, budget}) => {
    console.log(expenses, budget)
    // const [data, setData] = useState({});
/* 
    //future use
    let Today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
	let day = new Date().toLocaleDateString('en-us', { day: 'numeric' });
	let month = new Date().toLocaleDateString('en-us', { month: 'short' });

    // save data to local storage
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data]);

    //during componnet mount fetch data from local storage
    useEffect(() => {
        const budget = JSON.parse(localStorage.getItem('data'));
        if(budget)
            setData(budget);
    }, [data]); */

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