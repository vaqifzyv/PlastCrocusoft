import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "/src/redux/store";
import "./i18n.js";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.Suspense fallback="loading...">
      <App />
    </React.Suspense>
  </Provider>
);
