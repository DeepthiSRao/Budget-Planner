import { SET_BUDGET } from '../util/constants';

export const budgetReducer = ( state = {}, action) => {
    switch(action.type){
        case SET_BUDGET: 
            return action.budget;
        default:
            return state;
    }
}