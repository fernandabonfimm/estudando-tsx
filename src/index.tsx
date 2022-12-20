import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./services/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import RoutesComponentes from "./routes/Routes";
import { UserLoggedProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserLoggedProvider
      children={
        <BrowserRouter>
          <RoutesComponentes />
        </BrowserRouter>
      }
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
