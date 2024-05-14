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
import ManageServiceMain from "../pages/manageService/ManageServiceMain";
import ProtectedRoute from "./ProtectedRoute";
import UpdateService from "../pages/manageService/UpdateService";
import BookedServices from "../pages/bookedServices/BookedServices";
import ErrorPage from "../pages/bookNow/errorPage/ErrorPage";
import Feedback from "../pages/feedback/Feedback";
import ServiceTodo from '../pages/serviceTodo/ServiceTodo'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage> ,
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
          element: <ProtectedRoute><AddServices></AddServices></ProtectedRoute>
        },
        {
          path:'/eachService/:id',
          element:<ProtectedRoute><EachHomeService></EachHomeService></ProtectedRoute>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookNow/:id',
          element:<ProtectedRoute><BookNow></BookNow></ProtectedRoute>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/allServices',
          element: <AllServices></AllServices>,
          loader:()=> fetch('http://localhost:5000/services')
        },
        {
          path:'/manageService',
          element:<ProtectedRoute><ManageServiceMain></ManageServiceMain></ProtectedRoute>
        },
        {
          path:'/updateService/:id',
          element:<UpdateService></UpdateService>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookedServices',
          element:<ProtectedRoute><BookedServices></BookedServices></ProtectedRoute>
        },
        {
          path:'/feedback',
          element:<ProtectedRoute><Feedback></Feedback></ProtectedRoute>,
          loader:()=> fetch('http://localhost:5000/message')
        },
        {
          path:'/servicesTodo',
          element:<ServiceTodo></ServiceTodo>,
        }
    ]
  },
]);
export default router;