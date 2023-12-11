import { UilSort } from '@iconscout/react-unicons';
import {LocationItemsData} from '../../Data/LocationsData';
import { useState } from 'react';

export const LocationsItemsTable = () => {

    const [selected, setSelected] = useState(false);

    const clickRowLocation = (index) => async() => {
        await setSelected(index);
    }

    return (
        <div className="table-container-items">
            <table>
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody>
                    {LocationItemsData[0].products.map((item, index) => {
                        return (
                            <tr key={index} className={selected === index ? 'selected' : ''} onClick={clickRowLocation(index)}>
                                <td>{item.reference}</td>
                                <td>{item.product}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}