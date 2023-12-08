import { UilSort } from '@iconscout/react-unicons'
import {TransactionsData} from '../../Data/TransactionData.js'
import { useState } from 'react'

export const TransactionsTable = () => {

    const [selected, setSelected] = useState(false);

    const clickRowTransaction = (index) => async() => {
        await setSelected(index);
    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>
                            <div className='headerTable'>
                                Date
                                <UilSort className="sortIcon"/>
                            </div>
                        </th>
                        <th>
                            <div className='headerTable'>
                                Reference
                                <UilSort className="sortIcon" />
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
                                Quantity
                                <UilSort className="sortIcon" />
                            </div>
                        </th>
                        <th>
                            <div className='headerTable'>
                                Type
                                <UilSort className="sortIcon" />
                            </div>
                        </th>
                        <th>
                            <div className='headerTable'>
                                Client/Supplier
                                <UilSort className="sortIcon" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {TransactionsData.map((item, index) => {
                        return (
                            <tr key={index} className={selected === index ? 'selected' : ''} onClick={clickRowTransaction(index)}>
                                <td>{item.date}</td>
                                <td>{item.reference}</td>
                                <td>{item.product}</td>
                                <td>{item.quantity}</td>
                                <td>{item.type}</td>
                                <td>{item.client==='' ? item.supplier : item.client}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}