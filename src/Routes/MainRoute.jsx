import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import CreateUser from "../Pages/Create&Login/CreateUser";
import Login from "../Pages/Create&Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Properties from "../Pages/AllProperties/Properties";
import PropertyDetails from "../Pages/AllProperties/PropertyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage> ,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"properties",
          element:<Properties></Properties>
        },
        {
          path:"properties/:id",
          element:<PropertyDetails></PropertyDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/Properties/${params?.id}`)
        },
      ]
    },
    {
      path:'/registration',
      element:<CreateUser></CreateUser>
    },
    {
      path:'/Login',
      element:<Login></Login>
    },
  ]);
  export default router;