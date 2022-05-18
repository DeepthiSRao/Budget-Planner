import React from 'react';
import './budget.css';

const CategoryItem = ({category, budget}) => {
    const {name, amount, color} = category;
    const progress = (budget === 0) ? 0 : (amount/budget * 200).toFixed(2);

    return (
        <>
            <div className='row mt-3'>
                <div className='col-1 my-auto'>
                    <div className='rounded-circle category' style={{background:color}}>
                    </div>
                </div>
                <div className='col-11 d-flex flex-column justify-content-center'>
                    <div>{name}</div>
                    <div className="progress">
                        <div 
                            className="progress-bar" 
                            role="progressbar"
                            ref={(el) => {
                                if (el) {
                                  el.style.setProperty('background-color', color, 'important');
                                }
                              }} 
                            style={{width: `${progress}%`}} 
                            aria-valuenow={progress} 
                            aria-valuemin="0" 
                            aria-valuemax="100">
                                {progress}%
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div>Spent ${amount.toFixed(2)}</div>
                        <div>{`${progress}%`}</div>
                    </div>
                </div>
                <div className="category col-md-2 my-auto">
                </div>
            </div>
        </>
    );
}
 
export default CategoryItem;