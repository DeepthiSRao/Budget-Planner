import React from 'react';
import { connect } from 'react-redux';
import { buildStyles, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetProgressBar = ({totalBudget, totalExpenses}) => {
    const totalProgress = ((totalExpenses/totalBudget) * 100).toFixed(2);   
    
    return (
        <div className="col-8 mx-auto">
            <CircularProgressbarWithChildren 
                value={totalProgress} 
                strokeWidth={10} 
                counterClockwise={false} 
                styles={buildStyles({
                    pathColor: '#DDF115',
                    trailColor: '#F8F4FE',
                })}
            >
                <div style={{fontSize: 20}}>
                    {`Spent`}
                </div>
                <div className='text-primary fw-bold' style={{fontSize: 32}}>
                    {`$${totalExpenses.toFixed(2)}`}
                </div>
                <div style={{fontSize: 20}} >
                    {`of`}
                </div>
                <div style={{fontSize: 20}} >
                    {`$${totalBudget.toFixed(2)}`}
                </div>
            </CircularProgressbarWithChildren>
            <p className="text-center m-2">As of today</p>
        </div>      
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