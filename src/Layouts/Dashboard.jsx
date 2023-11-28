import { FaAd, FaBook, FaHome, FaList, FaListAlt, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { BiMenu, } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import useAuth from "../Hooks/useAuth";
import { FaListCheck, FaShop } from "react-icons/fa6";


const Dashboard = () => {
    const { user } = useAuth()
    const [menu, setMenu] = useState(false)
    const isAdmin = false;
    const isAgent = true;
    return (
        <div className="flex">
            <div className={`w-72 py-4 lg:py-8 min-h-screen bg-[#535252] text-white text-lg duration-1000 z-50 lg:relative lg:left-0 top-0 absolute ${menu ? "left-0" : "-left-[1000px]"}`}>
                <ul className='menu p-4'>
                    <AiOutlineClose onClick={() => setMenu(false)} className="text-4xl mb-5 lg:hidden"></AiOutlineClose>
                    <li>
                        <NavLink onClick={() => setMenu(false)} to={`/dashboard/${user?.email}`}><FaUser></FaUser>{isAdmin ? 'Admin Profile' : isAgent? "Agent Profile" : 'My Profile'}</NavLink>
                    </li>
                    {
                        isAdmin &&
                        <>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/addItems"}><FaUtensils></FaUtensils>Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/manageItems"}><FaList></FaList>Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/manageBookings"}><FaBook></FaBook>Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setMenu(false)} to={"/dashboard/users"}><FaUser></FaUser>All Users</NavLink>
                            </li>
                        </>
                    }
                    {
                        isAgent &&
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
                        isAgent || isAdmin ||
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