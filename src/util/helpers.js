export const formatExpenseTable = (expense, categories) => {
    const category = categories.find(ele => ele.id === expense.category);
    const totalExpenses = categories.reduce((acc,category) => (acc + category.amount),0);

    return {
        ...expense,
        category,
        totalExpenses
    }
}

export const formatCategoryOptions = (categories) => {
    return categories.map((category, index) => {
        return {
            label: (
                <div className="d-flex">
                    <div className='rounded-circle category-select my-auto' style={{background: category.color}}></div>
                    <div className='text-lowercase text-cap text-truncate'>{category.name}</div>
                </div>
            ),
            value: category.id,
            id: index
        } 
    });
}