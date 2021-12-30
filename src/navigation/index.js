import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import addproduct from "../screens/addContent";
import createProduct from "../screens/createProduct";
import contentHome from "../screens/contentHome";
import selectBrand from "../screens/selectBrand";
import varientDetails from "../screens/varientDetails";

function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={selectBrand} />
        <Route exact path="/add/content" component={addproduct} />
        <Route exact path="/content/home" component={contentHome} />
        <Route exact path="/createProduct" component={createProduct} />
        <Route exact path="/variant" component={varientDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
