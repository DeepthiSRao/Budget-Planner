import { 
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY_BUDGET,
} from '../util/constants';

const initData = [
    { id:1, name: 'EDUCATION', color: '#17A1FA', amount: 0 },
    { id:2, name: 'CLOTHS & FASHION', color: '#FF7262', amount: 0 },
    { id:3, name: 'FOOD', color: '#DDF115', amount: 0 },
    { id:4, name: 'TRANSPORT', color: '#24CE85', amount: 0 },
    { id:5, name: 'OTHERS', color: '#BB91F1', amount: 0 },
];

export const categoryReducer = ( state = initData, action) => {
    switch(action.type){
        case ADD_CATEGORY:
            return state.concat(action.category);
        case EDIT_CATEGORY:
            return state.map(category => {
                if(category.id === action.id)
                    return {...category, ...action.category};
                return category;
            })
        case DELETE_CATEGORY:
            return state.filter(category =>(category.id !== action.id));
        case EDIT_CATEGORY_BUDGET:
            const { amount, id, isAdd } = action;
           
            return state.map(category => {
                if(category.id === id){
                    const editedAmount = isAdd ? 
                                         ( category.amount + amount )
                                         : ( category.amount - amount );
                    console.log(isAdd, editedAmount);
                    return {
                        ...category,
                        amount: editedAmount
                    };
                }
                return category;
            });
        default:
            return state;
    }
}