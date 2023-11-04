import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./page/home/Home";
import Root from "./Root/Root";
import About from "./page/component/about/About";
import Career from "./page/component/career/Career";
import AuthContext from "./context/AuthContext";
import Register from "./page/Register/Register";
import Login from "./page/component/login/Login";
import NewsDetails from "./page/newsDetails/NewsDetails";
import PrivateRout2 from "./privateRout/PrivateRout2";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../public/news.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRout2>
            <NewsDetails></NewsDetails>
          </PrivateRout2>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </React.StrictMode>
);
