import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddServices from "../pages/AddServices/AddServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div><h1>Error page | Error page to be made</h1></div>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'signUp',
          element:<Register></Register>
        },
        {
          path:'/addService',
          element: <AddServices></AddServices>
        }
    ]
  },
]);
export default router;