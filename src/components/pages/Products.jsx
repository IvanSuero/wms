import { Sidebar } from "../Sidebar";
import { ProductsTable } from "../products/ProductsTable";
import { FilterProducts } from "../products/FilterProducts";

export const Products = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <ProductsTable />
                <FilterProducts />
            </div>
        </div>
    )
}