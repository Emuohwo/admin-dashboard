import "./newProduct.css"

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="newUserTitle">New Product</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Image</label>
                    <input type="file" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Name</label>
                    <input type="text" placeholder="John Doe" />
                </div>
                <div className="newUserItem">
                    <label>Stock</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form> 
        </div>
    )
}