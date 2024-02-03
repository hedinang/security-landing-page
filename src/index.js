import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import Router from "./router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ConfigProvider, theme } from "antd";

const App = () => (
  <ConfigProvider theme={theme}>
      <RouterProvider router={Router} />
      <ToastContainer autoClose={1500} />
    </ConfigProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
