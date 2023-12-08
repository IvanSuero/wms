import { UilPlus } from '@iconscout/react-unicons';
import { UilSearchAlt } from '@iconscout/react-unicons';

export const TransactionButtons = () => {
    return (
        <div className='transaction-buttons'>
            <button>
                <UilPlus />
                New Transaction
            </button>
            <button>
                <UilSearchAlt />
                View Details
            </button>
        </div>
    )
}