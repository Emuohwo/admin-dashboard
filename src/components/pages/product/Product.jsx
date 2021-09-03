import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { productData } from "../../../dummyData";
import Chart from "../../chart/Chart"
import "./product.css"

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart
                      data={productData}
                      dataKey="Sales"
                      title="Sales Performance"
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img 
                          src="https://images.pexels.com/photos/4089501/pexels-photo-4089501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                          alt="" 
                          className="productInfoImg" 
                        />
                        <span className="productName">Guitar</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id: </span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales: </span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active: </span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Guitar" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>IActive</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img 
                              src="https://images.pexels.com/photos/6953871/pexels-photo-6953871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                              alt="" 
                              className="productUploadImg" 
                            />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}