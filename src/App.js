import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import "./app.css";
import Home from "./components/pages/home/Home.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./components/pages/userList/UserList.jsx";
import User from "./components/pages/user/User.jsx";
import NewUser from "./components/pages/newUser/NewUser.jsx";
import ProductList from "./components/pages/productList/ProductList.jsx";
import Product from "./components/pages/product/Product.jsx";
import NewProduct from "./components/pages/newProduct/NewProduct.jsx";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
