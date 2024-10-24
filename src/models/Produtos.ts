type Produto = {
    title: string,
    price: number
}

const data = [
    {title: 'Sabonete Dovo',price:1.80},
    {title: 'Xampu Seda',price:12.50},
    {title: 'Doritos Queijo Nacho',price:5.99},
    {title: 'Monster Energy',price:1.80},
]

export const Produto = {
    getAll: () => {
        return data
    }
}