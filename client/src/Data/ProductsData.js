import axios from 'axios'

export function getProductsData() {
    axios.get('/api/data')
    .then((res) => {
        console.log(res.data)
        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
}


/*
export const ProductsData = [
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
    {
        reference: '0001',
        product: 'Product 1',
        stock: 10,
        category: 'Category 1',
        location: 'Location 1',
    },
]*/