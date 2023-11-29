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
import WishList from "../Pages/Dashboard/User/WishList";
import MakeOffer from "../Pages/Dashboard/User/MakeOffer";
import BoughtProperties from "../Pages/Dashboard/User/BoughtProperties";
import MyReviews from "../Pages/Dashboard/User/MyReviews";
import AddProperty from "../Pages/Dashboard/Agent/AddProperty";
import MyAddedProperties from "../Pages/Dashboard/Agent/MyAddedProperties";
import UpdateProperty from "../Pages/Dashboard/Agent/UpdateProperty";
import RequestedProperties from "../Pages/Dashboard/Agent/RequestedProperties";
import ManageProperties from "../Pages/Dashboard/Admin/ManageProperties";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import ManageReviews from "../Pages/Dashboard/Admin/ManageReviews";

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
          loader: ({params})=>fetch(`https://estate-echo-server.vercel.app/Properties/${params?.id}`)
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
          loader:({params})=>fetch(`https://estate-echo-server.vercel.app/Users/specific/${params?.email}`)
        },

        //user dashboard routes...
        {
          path:'/dashboard/wishlist',
          element:<WishList></WishList>,
        },
        {
          path:'/dashboard/makeOffer/:id',
          element:<MakeOffer></MakeOffer> ,
          loader:({params})=>fetch(`https://estate-echo-server.vercel.app/Wishlist/makeOffer/${params?.id}`)
        },
        {
          path:'/dashboard/boughtProperties',
          element:<BoughtProperties></BoughtProperties> ,
        },
        {
          path:'/dashboard/myReviews',
          element:<MyReviews></MyReviews> ,
        },

        //agent dashboard routes
        {
          path:'/dashboard/addProperty',
          element:<AddProperty></AddProperty> ,
        },
        {
          path:'/dashboard/addedProperty',
          element:<MyAddedProperties></MyAddedProperties> ,
        },
        {
          path:'/dashboard/updateProperty/:id',
          element:<UpdateProperty></UpdateProperty> ,
          loader:({params})=>fetch(`https://estate-echo-server.vercel.app/Properties/${params?.id}`)
        },
        {
          path:'/dashboard/requestedProperty',
          element:<RequestedProperties></RequestedProperties>
        },

        //admin dashboard routes
        {
          path:'/dashboard/manageProperties',
          element:<ManageProperties></ManageProperties>
        },
        {
          path:'/dashboard/users',
          element:<AllUsers></AllUsers>
        },
        {
          path:'/dashboard/manageReviews',
          element:<ManageReviews></ManageReviews>
        },
      ]
    },
  ]);
  export default router;