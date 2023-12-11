import { Sidebar } from "../Sidebar";
import { MainDash } from "../dashboard/MainDash";

export const Home = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <MainDash />
            </div>
        </div>
    )
}