import React, { useEffect, useState } from 'react';
import BudgetView from '../budget-view/budget-view';
import ExpenseView from '../expense-view/expense-view';
import NavBar from '../header-view/navbar-view';

const HomePage = () => {
    const [data, setData] = useState({});
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
            <div class="container py-5">
                <div class="row">
                    <div class="col-6"><BudgetView /></div>
                    <div class="col-6"><ExpenseView /></div>
                </div>
            </div>
        </>
    );
}
 
export default HomePage;