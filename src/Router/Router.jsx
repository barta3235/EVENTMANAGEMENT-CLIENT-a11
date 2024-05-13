import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddServices from "../pages/AddServices/AddServices";
import EachHomeService from "../components/HomeService/EachHomeService";
import BookNow from "../pages/bookNow/BookNow";
import AllServices from "../pages/allservices/AllServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div><h1>Error page | Error page to be made</h1></div>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5000/services')
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
        },
        {
          path:'/eachService/:id',
          element:<EachHomeService></EachHomeService>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookNow/:id',
          element:<BookNow></BookNow>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/allServices',
          element: <AllServices></AllServices>,
          loader:()=> fetch('http://localhost:5000/services')
        }
    ]
  },
]);
export default router;