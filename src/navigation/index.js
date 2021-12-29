import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import addproduct from "../screens/addProduct";
import createProduct from "../screens/createProduct";
import displayProduct from "../screens/displayProduct";
import selectBrand from "../screens/selectBrand";
import varientDetails from "../screens/varientDetails";

function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={selectBrand} />
        <Route exact path="/addProduct" component={addproduct} />
        <Route exact path="/display" component={displayProduct} />
        <Route exact path="/createProduct" component={createProduct} />
        <Route exact path="/variant" component={varientDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
