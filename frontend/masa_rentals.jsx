import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to Masa Rentals!</h1>, root)
})