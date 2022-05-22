import React from 'react';
import { connect } from 'react-redux';
import { formatExpenseTable } from '../../util/helpers';
import EditIcons from './edit-icon';

const ExpenseTable = ({expenseList}) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);

    return ( 
        <div className="col-12 align-self-start">
            {
                expenseList.length === 0 ? 
                <div className='col-12 fw-bold mt-4'>No expenses added</div>
                : (
                    <>
                        <div className="d-flex flex-row">
                           {/*  <p className="fw-bold text-dark">Expenses</p> */}
                            <p className="fw-bold text-dark">Expenses balance: ${}</p>
                           {/*  <p className="fw-bold text-dark">Calendar</p> */}
                        </div>
                        {
                            expenseList.map(item => (
                                <div className='conatiner' key={item.id}>
                                    <div className='row'>
                                        <div className='col-12 mb-2'>{date}</div>
                                    </div>
                                    <div className='d-flex flex-row flex-nowrap align-items-center'>
                                        <div className='col-lg-3 col-md-2 col-4 expense-content p-2'>{item.description}</div>
                                        <div className='col-2 expense-content p-2'>${item.amount}</div>
                                        <div className='col-2 p-2 my-0 expense-content'>
                                            <div className='rounded-circle category' style={{background: item.category.color}}></div>
                                        </div>
                                        <div className='col-4 p-2 expense-content text-lowercase text-cap d-none d-sm-block'>{item.category.name}</div>
                                        <div className='col-auto table-icon'>
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
    expenseList : expenses?.map(item => formatExpenseTable(item, categories))
});

export default connect(mapStateToProps)(ExpenseTable);