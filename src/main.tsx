// import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga";
import "./assets/scss/main.scss";
import App from "./UI/App";

ReactGA.initialize("G-S2GQWW0KR7");
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <App />
);
