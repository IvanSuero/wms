import { UilSort } from '@iconscout/react-unicons'
import {LocationsData} from '../../Data/LocationsData'
import { useState } from 'react'

export const LocationsTable = () => {

    const [selected, setSelected] = useState(false);

    const clickRowLocation = (index) => async() => {
        await setSelected(index);
    }

    return (
        <div className="table-container-locations">
            <table>
                <thead>
                    <tr>
                        <th>
                            <div className='headerTable'>
                                Location
                                <UilSort className="sortIcon"/>
                            </div>
                        </th>
                        <th>
                            <div className='headerTable'>
                                Zone
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
                                Occupancy
                                <UilSort className="sortIcon" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {LocationsData.map((item, index) => {
                        return (
                            <tr key={index} className={selected === index ? 'selected' : ''} onClick={clickRowLocation(index)}>
                                <td>{item.location}</td>
                                <td>{item.zone}</td>
                                <td>{item.type}</td>
                                <td>{item.occupancy}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}