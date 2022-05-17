import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './budget.css';

const CategoryItem = ({category, budget}) => {
    const {name, amount, color} = category;
    const progress = (amount/budget * 200).toFixed(2);

    return (
        <>
            <div className='row mt-3'>
                <div className="category col-md-1 my-auto" style={{background:color}}></div>
                <div className='col-6 d-flex flex-column justify-content-center'>
                    <div>{name}</div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <div>Spent ${amount.toFixed(2)}</div>
                        <div>{`${progress}%`}</div>
                    </div>
                </div>
                <div className="category col-md-2 my-auto">
                    <FontAwesomeIcon icon="fa-regular fa-trash-can" />
                </div>
            </div>
        </>
    );
}
 
export default CategoryItem;