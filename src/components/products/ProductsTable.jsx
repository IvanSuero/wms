import { UilSort } from '@iconscout/react-unicons'
import {ProductsData} from '../../Data/ProductsData.js'
import { useState } from 'react'

export const ProductsTable = () => {

    const [selected, setSelected] = useState(false);

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
                    {ProductsData.map((item, index) => {
                        return (
                            <tr key={index} className={selected === index ? 'selected' : ''} onClick={clickRowProduct(index)}>
                                <td>{item.reference}</td>
                                <td>{item.product}</td>
                                <td>{item.stock}</td>
                                <td>{item.category}</td>
                                <td>{item.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}