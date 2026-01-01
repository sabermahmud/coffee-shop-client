import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index:true,
            path:"/",
            Component:Home
        },
        {
          path: "/signup",
          Component:SignUp
        },
        {
          path: "/login",
          Component:Login
        },
        {
          path: "/about",
          Component:About
        },
        {
          path: "/contact",
          Component:Contact
        },
        {
          path:"/products",
          Component:Products
        }
    ]
  }
]);