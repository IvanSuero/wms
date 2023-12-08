import { Sidebar } from "../Sidebar";
import { TransactionsView } from "../transactions/TransactionsView";

export const Transactions = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <TransactionsView />
            </div>
        </div>
    )
}