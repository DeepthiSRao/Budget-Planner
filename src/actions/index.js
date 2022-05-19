import { SET_BUDGET,
         ADD_EXPENSE, 
         EDIT_EXPENSE,
         DELETE_EXPENSE, 
         ADD_CATEGORY,
         DELETE_CATEGORY,
         EDIT_CATEGORY,
         EDIT_CATEGORY_BUDGET } from '../util/constants.js';

export const setBudget = (budget)=> ({
    type: SET_BUDGET,
    budget
});

export const addExpense = (expense)=> ({
    type: ADD_EXPENSE,
    expense
});

export const editExpense = (expense)=> ({
   type: EDIT_EXPENSE,
   expense
});

export const deleteExpense = (id)=> ({
    type: DELETE_EXPENSE,
    id
})

export const addCategory = (category)=> ({
    type: ADD_CATEGORY,
    category
});

export const editCategory = (id, category)=> ({
   type: EDIT_CATEGORY,
   id,
   category
});

export const deleteCategory = (id)=> ({
    type: DELETE_CATEGORY,
    id
});

export const editCategoryBudget = ({id, amount, isAdd})=> ({
    type: EDIT_CATEGORY_BUDGET,
    id,
    amount,
    isAdd
});