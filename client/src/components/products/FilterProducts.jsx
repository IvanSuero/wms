

export const FilterProducts = () => {
    return (
        <form action="">
            <div className="filters">
                <div className="filter_input">
                    <label htmlFor="reference">Reference</label>
                    <input type="text" name="reference" id="reference" />
                </div>
                <div className="filter_input">
                    <label htmlFor="product">Product</label>
                    <input type="text" name="product" id="product" />
                </div>
                <div className="filter_input">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" />
                </div>
                <div className="filter_input">
                    <label htmlFor="stock">Stock</label>
                    <input type="text" name="stock" id="stock" />
                </div>
                <div className="filter_input">
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" multiple>
                        <option value="all">All</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                    </select>
                </div>
                <input type="submit" value="Filter" />
            </div>
        </form>
    )
}