import '../../css/transactions.css';
import { TransactionButtons } from "./TransactionsButtons";
import { FilterTransactions } from "./FilterTransactions";
import { TransactionsTable } from "./TransactionsTable";

export const TransactionsView = () => {
    return (
        <div className='transactions'>
            <h1>Transactions</h1>
            <TransactionButtons />
            <div className='transactionComponents'>
                <TransactionsTable />
                <FilterTransactions />
            </div>
        </div>
    )
}