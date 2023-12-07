import { UilPlus } from '@iconscout/react-unicons';
import { UilSearchAlt } from '@iconscout/react-unicons';
import { UilEdit } from '@iconscout/react-unicons';
import { UilTrashAlt } from '@iconscout/react-unicons';
import { UilSitemap } from '@iconscout/react-unicons';

export const ProductButtons = () => {
    return (
        <div className='product-buttons'>
            <button>
                <UilPlus />
                New Product
            </button>
            <button>
                <UilSearchAlt />
                View Details
            </button>
            <button>
                <UilEdit />
                Edit
            </button>
            <button>
                <UilTrashAlt />
                Delete
            </button>
            <button>
                <UilSitemap />
                Picture
            </button>
        </div>
    )
}