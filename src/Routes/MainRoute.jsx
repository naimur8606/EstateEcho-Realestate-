import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import CreateUser from "../Pages/Create&Login/CreateUser";
import Login from "../Pages/Create&Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Properties from "../Pages/AllProperties/Properties";
import PropertyDetails from "../Pages/AllProperties/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import UserProfile from "../Pages/Dashboard/UserProfile";
import WishList from "../Pages/Dashboard/WishList";
import MakeOffer from "../Pages/Dashboard/MakeOffer";
import BoughtProperties from "../Pages/Dashboard/BoughtProperties";
import MyReviews from "../Pages/Dashboard/MyReviews";

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
          path:"/properties",
          element:<PrivateRoute><Properties></Properties></PrivateRoute>
        },
        {
          path:"/properties/:id",
          element:<PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
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
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'/dashboard/:email',
          element:<UserProfile></UserProfile>,
          loader:({params})=>fetch(`http://localhost:5000/users/${params?.email}`)
        },
        {
          path:'/dashboard/wishlist',
          element:<WishList></WishList>,
        },
        {
          path:'/dashboard/makeOffer/:id',
          element:<MakeOffer></MakeOffer> ,
          loader:({params})=>fetch(`http://localhost:5000/Wishlist/makeOffer/${params?.id}`)
        },
        {
          path:'/dashboard/boughtProperties',
          element:<BoughtProperties></BoughtProperties> ,
        },
        {
          path:'/dashboard/myReviews',
          element:<MyReviews></MyReviews> ,
        },
      ]
    },
  ]);
  export default router;