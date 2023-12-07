import '../../css/products.css';
import { ProductButtons } from "./ProductButtons";
import { UilSort } from '@iconscout/react-unicons';

export const ProductsTable = () => {
    return (
        <div className='products'>
            <h1>Products</h1>
            <ProductButtons />
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div className='headerTable'>
                                    Reference
                                    <UilSort className="sortIcon"/>
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
                                    Stock
                                    <UilSort className="sortIcon" />
                                </div>
                            </th>
                            <th>
                                <div className='headerTable'>
                                    Category
                                    <UilSort className="sortIcon" />
                                </div>
                            </th>
                            <th>
                                <div className='headerTable'>
                                    Location
                                    <UilSort className="sortIcon" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>123456</td>
                            <td>Product 1</td>
                            <td>10</td>
                            <td>Category 1</td>
                            <td>Location 1</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 2</td>
                            <td>10</td>
                            <td>Category 2</td>
                            <td>Location 2</td>
                        </tr>
                        <tr className="selected">
                            <td>123456</td>
                            <td>Product 3</td>
                            <td>10</td>
                            <td>Category 3</td>
                            <td>Location 3</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 4</td>
                            <td>10</td>
                            <td>Category 4</td>
                            <td>Location 4</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 1</td>
                            <td>10</td>
                            <td>Category 1</td>
                            <td>Location 1</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 2</td>
                            <td>10</td>
                            <td>Category 2</td>
                            <td>Location 2</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 3</td>
                            <td>10</td>
                            <td>Category 3</td>
                            <td>Location 3</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 4</td>
                            <td>10</td>
                            <td>Category 4</td>
                            <td>Location 4</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 1</td>
                            <td>10</td>
                            <td>Category 1</td>
                            <td>Location 1</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 2</td>
                            <td>10</td>
                            <td>Category 2</td>
                            <td>Location 2</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 3</td>
                            <td>10</td>
                            <td>Category 3</td>
                            <td>Location 3</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 4</td>
                            <td>10</td>
                            <td>Category 4</td>
                            <td>Location 4</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 1</td>
                            <td>10</td>
                            <td>Category 1</td>
                            <td>Location 1</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 2</td>
                            <td>10</td>
                            <td>Category 2</td>
                            <td>Location 2</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 3</td>
                            <td>10</td>
                            <td>Category 3</td>
                            <td>Location 3</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 4</td>
                            <td>10</td>
                            <td>Category 4</td>
                            <td>Location 4</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 1</td>
                            <td>10</td>
                            <td>Category 1</td>
                            <td>Location 1</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 2</td>
                            <td>10</td>
                            <td>Category 2</td>
                            <td>Location 2</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 3</td>
                            <td>10</td>
                            <td>Category 3</td>
                            <td>Location 3</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Product 4</td>
                            <td>10</td>
                            <td>Category 4</td>
                            <td>Location 4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}