import React from "react";
import ReactDOM from "react-dom/client";
import AdminsApp from "../AdminApp";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/reset.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
        <AdminsApp />
    </Router>
  </React.StrictMode>
);


