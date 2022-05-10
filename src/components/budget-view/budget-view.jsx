import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetView = () => {
    const [budget, setBudget] = React.useState(1200);
    const [expenses, setExpenses] = React.useState(150);
    const percentage = Math.floor(expenses/budget * 100);
    return (
        <>
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
        </>      
    );
}
 
export default BudgetView;