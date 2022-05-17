import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { DATA as data, formatExpenseTable } from '../../util/data';
import './expenses.css';

const ExpenseTable = () => {
    const date = "Mon, 2 May 2022";
    const res = data?.expenses.map(item => formatExpenseTable(item));

    return ( 
        <>
            <div className="d-flex flex-row justify-content-between mt-4">
                <p className="fw-bold">Expenses</p>
                <p className="fw-bold">Expenses balance: $700</p>
                <p className="fw-bold">Calendar</p>
            </div>
            <table className="table">
                <tbody>
                    {
                        res.map(item => (
                            <>
                                <Row>
                                    <Col>{date}</Col>
                                </Row>
                                <tr key={item.id}>
                                    <td className='col-md-6'>{item.description}</td>
                                    <td className='col-md-1'>{item.amount}</td>
                                    <td className='col-md-1'>
                                        <div className="category" style={{background: item.category.color}}></div>
                                    </td>
                                    <td className='col-md-4'>{item.category.name}</td>
                                </tr>
                            </>       
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
 
export default ExpenseTable;