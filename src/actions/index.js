import { SET_BUDGET,
         ADD_EXPENSE, 
         EDIT_EXPENSE,
         DELETE_EXPENSE, 
         ADD_CATEGORY,
         DELETE_CATEGORY,
         EDIT_CATEGORY} from '../util/constants.js';

export const setBudget = (budget) =>({
    type: SET_BUDGET,
    budget
});

export const addExpense = (expense) =>({
    type: ADD_EXPENSE,
    expense
});

export const editExpense = (id, expense) =>({
   type: EDIT_EXPENSE,
   id,
   expense
});

export const deleteExpense = (id) =>({
    type: DELETE_EXPENSE,
    id
})

export const addCategory = (category) =>({
    type: ADD_CATEGORY,
    category
});

export const editCategory = (id, category) =>({
   type: EDIT_CATEGORY,
   id,
   category
});

export const deleteCategory = (id) =>({
    type: DELETE_CATEGORY,
    id
})