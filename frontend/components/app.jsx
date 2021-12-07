import React from "react";
import {Switch} from "react-router-dom";
import { Route } from "react-router";

import SplashPages from "./splash_page";

const App = () => (
    <div>
        {/* <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute path="/notes" component={Main}/>
            <ProtectedRoute path="/notebooks" component={Main}/>
            <ProtectedRoute path="/tags" component={Main}/>
            <Route exact path="/" component={SplashPages}/>
            <Route component={RoutingError} />
        </Switch> */}

        <Route exact path="/" component={SplashPages}/>
    </div>
)

export default App;