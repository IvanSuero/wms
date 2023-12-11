import '../../css/products.css';
import { ProductButtons } from "./ProductButtons";
import { FilterProducts } from "./FilterProducts";
import { ProductsTable } from "./ProductsTable";

export const ProductsView = () => {
    return (
        <div className='products'>
            <h1>Products</h1>
            <ProductButtons />
            <div className='productComponents'>
                <ProductsTable />
                <FilterProducts />
            </div>
        </div>
    )
}