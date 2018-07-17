import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
<div>
<BrowserRouter>
<Switch>
<Route path="/" component={App}   exact/>       {/*only render app component when the path is EXACTLY "/"*/}
<Route path="/recipe/:id" component={Recipe}/>          {/*if the path is recipe, render recipe componentn*/}
</Switch>
</BrowserRouter>

</div>

)



export default Router;