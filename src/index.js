import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/auth";
import { CurUserContextProvider } from "./context/curUserContext";
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CurUserContextProvider>
        <App />
      </CurUserContextProvider>{" "}
    </AuthProvider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
