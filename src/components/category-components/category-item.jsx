import React from 'react';
import { connect } from 'react-redux';

const CategoryItem = ({budget, category}) => {
    const {name, amount, color} = category;
    const progress = (amount === 0) ? 0 : (amount/budget * 100).toFixed(2);

    return (
        <>
            <div className='row mt-2'>
                <div className='col-1 my-auto'>
                    <div className='rounded-circle category' style={{background:color}}>
                    </div>
                </div>
                <div className='col-11 d-flex flex-column justify-content-center'>
                    <div className='text-lowercase text-cap fw-bold'>{name}</div>
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
                        <div>Spent $ {amount.toFixed(2)}</div>
                        <div>{`${progress}%`}</div>
                    </div>
                </div>
                <div className="category col-md-2 my-auto">
                </div>
            </div>
        </>
    );
}

const mapStateToProps = ({budget, categories}, {id}) => {
    const category = categories.find(category => category.id === id);

    return {
        budget: budget?.amount || 0,
        category: category
    }
}

export default connect(mapStateToProps)(CategoryItem);