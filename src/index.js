import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import SnackBarProvider from "./components/snackBar";

const App = () => {
  return (
    <React.StrictMode>
      <SnackBarProvider>
        <Router>
          <Routes />
        </Router>
      </SnackBarProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
