import ReactDOM from "react-dom/client";
import App from "./UI/App";

// *Import styling

// import "aos/dist/aos.css";
import React from "react";
import "./assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
