import { ADD_EXPENSE, 
         DELETE_EXPENSE,
         EDIT_EXPENSE
} from '../util/constants';

export const expenseReducer = ( state = [], action) => {
    switch(action.type){
        case ADD_EXPENSE:
            return  state.concat(action.expense);
        case EDIT_EXPENSE:
            return state.map(expense => {
                        if(expense.id === action.expense.id)
                            return action.expense;
                        return expense;
                    });
        case DELETE_EXPENSE:
            return state.filter(expense =>(expense.id !== action.id));
        default:
            return state;
    }
}