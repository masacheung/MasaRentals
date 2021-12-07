import React from "react";
import {Switch} from "react-router-dom";
import { Route } from "react-router";

import SplashPages from "./splash_page";

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={SplashPages}/>
        </Switch>
    </div>
)

export default App;