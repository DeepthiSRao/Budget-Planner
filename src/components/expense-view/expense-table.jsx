import React from 'react';
import { connect } from 'react-redux';
import { formatExpenseTable } from '../../util/helpers';
import EditIcons from './edit-icon';
import './../budget-view/style.css';

const ExpenseTable = ({expenses, categoryList}) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);

    const res = expenses.map(item => formatExpenseTable(item, categoryList));

    return ( 
        <div className="col-12 align-self-start">
            {
                expenses.length === 0 ? 
                <div className='col-12 fw-bold mt-4'>No expenses added</div>
                : (
                    <>
                        <div className="d-flex flex-row">
                           {/*  <p className="fw-bold text-dark">Expenses</p> */}
                            <p className="fw-bold text-dark">Expenses balance: $700</p>
                           {/*  <p className="fw-bold text-dark">Calendar</p> */}
                        </div>
                        {
                            res.map(item => (
                                <div className='conatiner' key={item.id}>
                                    <div className='row'>
                                        <div className='col-12 mb-2'>{date}</div>
                                    </div>
                                    <div className='d-flex my-auto'>
                                        <div className='col-md-3 col-sm-2 expense-content p-2'>{item.description}</div>
                                        <div className='col-md-2 expense-content p-2'>${item.amount}</div>
                                        <div className='col-md-1 expense-content p-2 my-auto'>
                                            <div className='rounded-circle category' style={{background: item.category.color}}></div>
                                        </div>
                                        <div className='col-md-3 col-sm-4 expense-content p-2 text-lowercase text-cap'>{item.category.name}</div>
                                        <div className='col-md-3 p-2 expense-content table-icon'>
                                            <EditIcons id={item.id} />
                                        </div>
                                    </div>
                                </div>       
                            ))
                        }
                    </>
                )}   
        </div>
    );
}

const mapStateToProps = ({expenses, categories}) => ({
    expenses,
    categoryList: categories
});

export default connect(mapStateToProps)(ExpenseTable);