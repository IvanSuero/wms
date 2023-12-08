import { LocationButtons } from './LocationButtons.jsx';
import { LocationsTable } from './LocationsTable';
import { LocationsItemsTable } from './LocationsItemsTable';
import '../../css/locations.css';

export const LocationsView = () => {
    return (
        <div className='locations'>
            <h1>Locations</h1>
            <LocationButtons />
            <div className='locationComponents'>
                <LocationsTable />
                <LocationsItemsTable />
            </div>
        </div>
    )
    }