import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import Router from "./router";

const App = () => (
  <RouterProvider router={Router} />
);

ReactDOM.render(<App />, document.getElementById("root"));
