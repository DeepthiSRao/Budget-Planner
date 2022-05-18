import { combineReducers } from 'redux';
import { budgetReducer } from './budget-reducer';
import { categoryReducer } from './category-reducers';
import { expenseReducer } from './expense-reducer';

export default combineReducers({
    budget: budgetReducer,
    expenses: expenseReducer,
    categories: categoryReducer
});