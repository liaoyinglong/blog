import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { rootStore } from "./sotre";

ReactDOM.render(
  <React.Fragment>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
