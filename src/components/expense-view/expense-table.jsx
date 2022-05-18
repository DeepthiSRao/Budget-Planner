import React from 'react';
import { connect } from 'react-redux';
import { formatExpenseTable } from '../../util/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

import './expenses.css';

const ExpenseTable = ({expenses, categoryList}) => {
    // if there is no expense data
    if(expenses.length === 0)
        return(<div className='col-12 fw-bold mt-4'>No expenses added</div>);
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);
    const res = expenses.map(item => formatExpenseTable(item, categoryList));

    return ( 
        <div className="col-8 align-self-start">
            <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold text-dark">Expenses</p>
                <p className="fw-bold text-dark">Expenses balance: $700</p>
                <p className="fw-bold text-dark">Calendar</p>
            </div>
            <table className="table" >
                <tbody>
                    {
                        res.map(item => (
                            <>
                                <div className='row'>
                                    <div className='col-12'>{date}</div>
                                </div>
                                <tr>
                                    <td className='col-md-2'>{item.description}</td>
                                    <td className='col-md-1'>${item.amount}</td>
                                    <td className='col-md-1 my-auto'>
                                        <div className='rounded-circle category' style={{background: item.category.color}}></div>
                                    </td>
                                    <td className='col-md-4'>{item.category.name}</td>
                                    <td className='col-md-1' style={{color: 'red'}}><FontAwesomeIcon icon={faPencil}/></td>
                                    <td className='col-md-1'><FontAwesomeIcon icon={faTrashCan} /></td>
                                </tr>
                            </>       
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = ({expenses, categories}) => ({
    expenses,
    categoryList: categories
});

export default connect(mapStateToProps)(ExpenseTable);