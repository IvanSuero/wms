import { Sidebar } from "../Sidebar";
import { ActionsView } from "../actions/ActionsView";
import '../../css/actions.css'

export const Actions = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <ActionsView />
            </div>
        </div>
    )
}