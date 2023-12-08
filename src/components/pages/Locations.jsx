import { Sidebar } from "../Sidebar";
import { LocationsView } from "../locations/LocationsView";

export const Locations = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <LocationsView />
            </div>
        </div>
    )
}