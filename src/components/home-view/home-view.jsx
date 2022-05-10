import React from 'react';
import BudgetView from '../budget-view/budget-view';
import {
    Container, Stack, 
} from 'react-bootstrap';

const HomePage = () => {
    return ( 
        <Container fluid>
            <Stack gap={2} className="col-md-3 mx-auto my-5">
                <BudgetView /> 
            </Stack>
        </Container>
    );
}
 
export default HomePage;