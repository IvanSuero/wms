import { Sidebar } from "../Sidebar";
import { ProductsView } from "../products/ProductsView";

export const Products = () => {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <ProductsView />
            </div>
        </div>
    )
}