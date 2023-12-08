export const FilterTransactions = () => {
    return (
        <form action="">
            <div className="filters">
                <div className="filter_input">
                    <label htmlFor="date">Date</label>
                    <input type="text" name="date" id="date" />
                </div>
                <div className="filter_input">
                    <label htmlFor="reference">Reference</label>
                    <input type="text" name="reference" id="reference" />
                </div>
                <div className="filter_input">
                    <label htmlFor="product">Product</label>
                    <input type="text" name="product" id="product" />
                </div>
                <div className="filter_input">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" name="quantity" id="quantity" />
                </div>
                <div className="filter_input">
                    <label htmlFor="clientSupplier">Client/Supplier</label>
                    <input type="text" name="clientSupplier" id="clientSupplier" />
                </div>
                <div className="filter_input">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" multiple>
                        <option value="all">All</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                    </select>
                </div>
                <input type="submit" value="Filter" />
            </div>
        </form>
    )
}