import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { DATA as data, formatExpenseTable } from '../../util/data';
import './expenses.css';

const ExpenseTable = () => {
    const date = "Mon, 2 May 2022";
    const res = data?.expenses.map(item => formatExpenseTable(item));

    return ( 
        <>
            <Row>
                <Col>Expenses</Col>
                <Col>Expenses balance: $700</Col>
                <Col>Calendar</Col>
            </Row>
            <Table borderless={true}>
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
            </Table>
        </>
    );
}
 
export default ExpenseTable;