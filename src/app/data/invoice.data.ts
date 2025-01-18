export const invoiceData = {
    id: 1,
    name: 'PC component',
    client: {
        name: 'Andres',
        lastname: 'Bellido',
        address: {
            country: 'Peru',
            city: 'Lima',
            street: 'One Street',
            number: 15,
        }
    },

    company: {
        name: 'New Horizons',
        fiscalNumber: 3138492888,
    },

    items: [
        {
            id: 1,
            product: 'CPU Intel i9',
            price: 588,
            quantity: 1
        },
        {
            id: 2,
            product: 'Mouse Samsun u12',
            price: 99,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor LG i29',
            price: 1200,
            quantity: 1
        }
    ]

}