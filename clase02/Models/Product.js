const getAll = () => {
    return [
        {
            id: 1,
            title: 'iphone 7',
            price: '400USD',
            conditions: 'new',
            description: 'Tremendo cel',
        }, 
        {
            id: 2,
            title: 'iphone 8',
            price: '600USD',
            conditions: 'new',
            description: 'Tremendo'
        }
    ]
}

module.exports = { getAll }