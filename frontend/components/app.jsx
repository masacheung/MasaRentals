import React from "react";
import {Switch} from "react-router-dom";
import { Route } from "react-router";

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
        <h1>Welcome to Masa Rentals!</h1>
    </div>
)

export default App;