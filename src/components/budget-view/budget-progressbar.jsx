import React from 'react';
import { buildStyles, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetProgressBar = () => {
    const [budget, setBudget] = React.useState(1200);
    const [expenses, setExpenses] = React.useState(150);
    const percentage = Math.floor(expenses/budget * 100);
    
    return (
        <div className="col-md-6 mx-auto">
            <CircularProgressbarWithChildren 
                value={expenses} 
                text={`$${budget}`}
                strokeWidth={4} 
                counterClockwise={true} 
                styles={buildStyles({
                    textSize: '12px',
                    pathColor: 'blue',
                    textColor: 'blue',
                })}>
                <div style={{ fontSize: 16, marginBottom: -60}} >
                    {`${percentage}% Spent`}
                </div>
            </CircularProgressbarWithChildren> 
        </div>      
    );
}
 
export default BudgetProgressBar;