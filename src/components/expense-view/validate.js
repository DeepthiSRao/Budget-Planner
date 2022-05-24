export const validate = (object, budget) => {
    let errors = {};

    for (const [fieldName, value] of Object.entries(object)) {
        switch(fieldName){
            case 'amount':
                if(!value)
                    errors.amount = 'Expense amount is required';
                else if(value <= 0)
                    errors.amount = 'Expense amount must be greater than zero';
                else if(value > budget)
                    errors.amount = 'Expense amount must be less than budge limit';
                else
                    errors.amount = '';
                break;
            case 'description':
                if(!value)
                    errors.description = 'Expense description is required';
                else
                    errors.description = '';
                break;
            case 'category':
                if(!value)
                    errors.category = 'Choose a category';
                else
                    errors.category = '';
                break;
            default:
                break;
        }
    }
    
    return errors;
}
