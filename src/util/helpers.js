export const formatExpenseTable = (expense, categories) => {
    const category = categories.find(ele => ele.id === expense.category);

    return {
        ...expense,
        category
    }
}

export const formatCategoryOptions = (categories) => {
    return categories.map((category, index) => {
        return {
            label: (
                <div className="d-flex">
                    <div className='rounded-circle category-select my-auto' style={{background: category.color}}></div>
                    <div className='text-lowercase text-cap'>{category.name}</div>
                </div>
            ),
            value: category.id,
            id: index
        } 
    });
}