export const DATA = {
    budget: 1200,
    expenses: [
        {
            id: 1,
            description: 'Starbucks',
            amount: 50,
            category: 3
        },
        {
            id: 2,
            description: 'Adidas',
            amount: 50,
            category: 2
        },
        {
            id: 3,
            description: 'HomeFix',
            amount: 50,
            category: 5
        },
    ],
    categories: [
        { id:1, name: 'EDUCATION', color: 'blue', amount: 100 },
        { id:2, name: 'CLOTHS & FASHION', color: 'orange', amount: 50 },
        { id:3, name: 'FOOD', color: 'yellow', amount: 20 },
        { id:4, name: 'TRANSPORT', color: 'green', amount: 90 },
        { id:5, name: 'OTHERS', color: 'purple', amount: 500 },
    ]
}

export const formatExpenseTable = (expense, categories) => {
    const category = categories.find(ele => ele.id === expense.category);

    return {
        ...expense,
        category
    }
}