import { UilSort } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const ProductsTable = () => {
    const [selected, setSelected] = useState(false);
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/data')
            .then(res => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const clickRowProduct = (index) => async() => {
        await setSelected(index);
    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>
                            <div className='headerTable'>
                                Reference
                                <UilSort className="sortIcon"/>
                            </div>
                        </th>
                        <th>
                            <div className='headerTable'>
                                Product
                                <UilSort className="sortIcon" />
                            </div>
                        </th>
                        <th>
                            <div className='headerTable'>
                                Stock
                                <UilSort className="sortIcon" />
                            </div>
                        </th>
                        <th>
                            <div className='headerTable'>
                                Category
                                <UilSort className="sortIcon" />
                            </div>
                        </th>
                        <th>
                            <div className='headerTable'>
                                Location
                                <UilSort className="sortIcon" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.products && data.products.map((product, index) => {
                        return (
                            <tr key={index} onClick={clickRowProduct(index)} className={selected === index ? "selected" : ""}>
                                <td>{product.reference}</td>
                                <td>{product.product}</td>
                                <td>{product.stock}</td>
                                <td>{product.category}</td>
                                <td>{product.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}