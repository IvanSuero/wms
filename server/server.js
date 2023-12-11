const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8080

app.use(cors())
app.use(express.json())

app.get('/api/data', (req, res) => {
    const data = { products: [{ reference: '0001', product: 'CHAIR', stock: 10, category: 'Furniture', location: 'A1' },
    { reference: '0002', product: 'TABLE', stock: 5, category: 'Furniture', location: 'A2' },]}
    res.json(data)
})

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)})