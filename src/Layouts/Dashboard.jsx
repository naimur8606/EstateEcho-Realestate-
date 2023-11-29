import { FaAd, FaBook, FaHome, FaList, FaListAlt, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiMenu, } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import useAuth from "../Hooks/useAuth";
import { FaListCheck, FaShop } from "react-icons/fa6";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const Dashboard = () => {
    const { user } = useAuth()
    const [menu, setMenu] = useState(false)
    const isAdmin = true;
    const isAgent = false;
    const [userStatus, setUserStates] =useState('');
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{
        axiosPublic(`/Users/specific/${user?.email}`)
        .then(res => setUserStates(res.data.status))
    })
    return (
        <div className="flex">
            <div className={`w-72 py-4 lg:py-8 min-h-screen bg-[#535252] text-white text-lg duration-1000 z-50 lg:relative lg:left-0 top-0 absolute ${menu ? "left-0" : "-left-[1000px]"}`}>
                <ul className='menu p-4'>
                    <AiOutlineClose onClick={() => setMenu(false)} className="text-4xl mb-5 lg:hidden"></AiOutlineClose>
                    <li>
                        <NavLink onClick={() => setMenu(false)} to={`/dashboard/${user?.email}`}><FaUser></FaUser>{userStatus === "Admin" ? 'Admin Profile' : userStatus === 'Agent'? "Agent Profile" : 'My Profile'}</NavLink>
                    </li>
                    {
                        userStatus === "Admin" &&
                        <>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/manageProperties"}><FaList></FaList>Manage Properties</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/users"}><FaUsers></FaUsers>Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/manageReviews"}><FaBook></FaBook>Manage reviews</NavLink>
                            </li>
                        </>
                    }
                    {
                        userStatus === 'Agent' &&
                        <>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/addProperty"}><FaList></FaList>Add Property</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/addedProperty"}><FaListCheck></FaListCheck>My Added Property</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/soldProperty"}><FaShop></FaShop>My Sold Property</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/requestedProperty"}><FaBook></FaBook>Requested Property</NavLink>
                            </li>
                        </>
                    }
                    {
                        userStatus === 'User' &&
                        <>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/wishlist"}><FaList></FaList>Wishlist</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/boughtProperties"}><FaShoppingCart></FaShoppingCart>Property bought</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/myReviews"}><FaAd></FaAd>My Review</NavLink>
                            </li>
                        </>
                    }
                    {
                        userStatus === 'Fraud' &&
                        <>
                            <li>Nothing For You...!</li>
                        </>
                    }
                    <p className="divider"></p>
                    <li>
                        <NavLink to={"/"}><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/properties"}><FaListAlt></FaListAlt>All Properties</NavLink>
                    </li>
                </ul>
            </div>
            <div className="p-2 md:p-8 w-full">
                <BiMenu onClick={() => setMenu(true)} className="text-5xl my-2 lg:hidden"></BiMenu>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;