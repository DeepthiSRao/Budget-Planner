import React from 'react';
import BudgetView from '../budget-view/budget-view';
import {
    Container, Stack, 
} from 'react-bootstrap';
import ExpenseView from '../expense-view/expense-view';

const HomePage = () => {
    return ( 
        <Container>
            <Stack gap={3} direction="horizontal" className="mt-5">
                <BudgetView />
                <ExpenseView /> 
            </Stack>
        </Container>
    );
}
 
export default HomePage;