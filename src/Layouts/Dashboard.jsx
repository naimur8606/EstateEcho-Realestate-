import { FaAd, FaBook, FaCalculator, FaHome, FaList, FaListAlt, FaShoppingBasket, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { BiMenu, BiVoicemail } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


const Dashboard = () => {
    const [menu, setMenu] = useState(false)
    const isAdmin = false;
    return (
        <div className="flex">
            <BiMenu onClick={() => setMenu(true)} className="text-2xl md:text-5xl top-[33px] md:top-9 left-4 absolute lg:hidden"></BiMenu>
            <div className={`w-64 py-4 lg:py-8 min-h-screen bg-[#535252] text-white text-lg duration-1000 z-50 lg:relative lg:left-0 top-0 absolute ${menu ? "left-0" : "-left-[1000px]"}`}>
                <ul className='menu p-4'>
                    <AiOutlineClose onClick={() => setMenu(false)} className="text-4xl mb-5 lg:hidden"></AiOutlineClose>
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink onClick={() => setMenu(false)} to={"/dashboard/adminHome"}><FaHome></FaHome>Admin Home</NavLink>
                                </li>
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
                            :
                            <>
                                {/* <li>
                                    <NavLink onClick={() => setMenu(false)} to="/dashboard"><FaUser></FaUser>My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setMenu(false)} to={"/dashboard/wishlist"}><FaList></FaList>Wishlist</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setMenu(false)} to={"/dashboard/boughtProperties"}><FaShoppingCart></FaShoppingCart>Property bought</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setMenu(false)} to={"/dashboard/myReview"}><FaAd></FaAd>My Review</NavLink>
                                </li> */}
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
            <div className="p-8 w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;