export const formatExpenseTable = (expense, categories) => {
    const category = categories.find(ele => ele.id === expense.category);

    return {
        ...expense,
        category
    }
}