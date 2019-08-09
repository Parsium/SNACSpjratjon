import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data from "./snacks.json";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App data={data} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
