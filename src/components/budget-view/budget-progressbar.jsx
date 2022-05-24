import React from 'react';
import { connect } from 'react-redux';
import { buildStyles, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import logo from '../../images/click.png';

const BudgetProgressBar = ({totalBudget, totalExpenses}) => {
    const totalProgress = (totalBudget === 0) ? 0 : ((totalExpenses/totalBudget) * 100).toFixed(2);   
    const balance = totalBudget - totalExpenses;

    return (
        <>
            <div className='col-md-8 col-8 px-3 mx-auto'>
                <p className='text-center fs-3 fw-bold pb-2'>Balance: ${balance.toFixed(2)}</p> 
                <CircularProgressbarWithChildren 
                    value={totalProgress} 
                    strokeWidth={10}
                    counterClockwise={false}
                    styles={buildStyles({
                        pathColor: '#6f1ae3',
                        trailColor: '#F8F4FE',
                    })}
                >
                    <div style={{fontSize: '1rem'}}>
                        {`Spent`}
                    </div>
                    <div className='fs-3 fw-bold'>
                        {`$${Math.abs(totalExpenses.toFixed(2))}`}
                    </div>
                    <div style={{fontSize: '1rem'}} >
                        {`of`}
                    </div>
                    <div style={{fontSize: '1rem'}} >
                        {`$${totalBudget.toFixed(2)}`}
                    </div>
                </CircularProgressbarWithChildren>
                <p className="text-center mt-3">As of today</p>
            </div>
        </>      
    );
}

const mapStateToProps = ({categories, budget}) =>{
    const totalExpenses = categories.reduce((acc,category) => (acc + category.amount),0);
    
    return {
        totalBudget: budget.amount ?? 0,
        totalExpenses: totalExpenses ?? 0
    }
}
export default connect(mapStateToProps)(BudgetProgressBar);