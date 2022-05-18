import React from 'react';
import { buildStyles, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetProgressBar = ({budget = 100, expenses = 40}) => {    
    return (
        <div className="col-6 mx-auto">
            <CircularProgressbarWithChildren 
                value={expenses} 
                strokeWidth={10} 
                counterClockwise={false} 
                styles={buildStyles({
                    textSize: '12px',
                    pathColor: '#DDF115',
                    trailColor: '#F8F4FE',
                })}
            >
                <div className='text-primary' style={{ fontSize: 16 }} >
                    {`$${budget.toFixed(2)}`}
                </div>
                <div style={{ fontSize: 16}} >
                    {`Spent`}
                </div>
                <div style={{ fontSize: 16}} >
                    {`of`}
                </div>
                <div style={{ fontSize: 16}} >
                    {`$${expenses.toFixed(2)}`}
                </div>
            </CircularProgressbarWithChildren>
            <p className="text-center m-2">As of today</p>
        </div>      
    );
}
 
export default BudgetProgressBar;