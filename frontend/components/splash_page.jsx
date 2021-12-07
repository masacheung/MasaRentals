import React from "react";
import Splash from "./splash_page/splash";
import { Route } from "react-router";

const SplashPages = () => (
    <div>
        <Route exact path="/" component={Splash}/>
    </div>
)

export default SplashPages;