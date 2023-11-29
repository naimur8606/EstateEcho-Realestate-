import { AiOutlineClose } from 'react-icons/ai'
import { BsPerson, BsPersonX } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const location = useLocation()?.pathname
    const { user, logOut } = useContext(AuthContext)
    const [menu, setMenu] = useState(false)
    // const [cart, refetch] = useCart()
    // console.log(user, user?.photoURL, cart)
    // useEffect(()=>{
    //     refetch()
    // },[user?.email, refetch])
    const SignOut = () => {
        logOut()
            .then(
                Swal.fire({
                    title: 'Success!',
                    text: 'Logout Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            )
            .catch(error => {
                Swal.fire({
                    title: 'Warning!',
                    text: `${error.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
            });
    }
    const navItems = [
        { name: "Home", path: "/", },
        { name: "All Properties", path: "/properties", },
        { name: "Dashboard", path: `/dashboard/${user?.email}`, },
    ]

    return (
        <div className="fixed top-0 z-50 w-full bg-black bg-opacity-50 max-w-6xl mx-auto py-2 md:py-4 px-3 flex justify-between items-center flex-row-reverse lg:flex-row">
            <img className='h-12' src="https://i.ibb.co/mTfvdVR/Esrate-Echo-logo.png" alt="" />
            <div className="text-4xl lg:hidden text-white">
                {menu ? <AiOutlineClose onClick={() => setMenu(false)}></AiOutlineClose> :
                    <BiMenu onClick={() => setMenu(true)}></BiMenu>}
            </div>
            <ul className={`w-full lg:w-auto lg:space-x-14 space-y-2 lg:space-y-0 text-white text-lg flex flex-col lg:flex-row items-center duration-1000 lg:relative lg:left-0 lg:top-0 absolute  ${menu ? "top-[64px] md:top-[80px] left-0 bg-[#000] bg-opacity-50 p-3" : "-left-[1100px] top-[20px]"}`}>
                {
                    navItems?.map((item, idx) =>
                        <li key={idx}>
                            <Link
                                to={item?.path}
                                onClick={() => setMenu(false)}
                                className={`${location === item?.path ? 'text-[#baff35]' : 'lg:text-white'}`}
                            >
                                {item?.name}
                            </Link>
                        </li>
                    )
                }
                <li>
            {user ?
                    <div className="flex items-center">
                        {user?.photoURL ? <img className="rounded-[50%] h-8 w-8 mr-2" src={user?.photoURL} alt="" /> : <BsPerson className="text-2xl mr-1.5"></BsPerson>}<button onClick={SignOut} >Logout</button>
                    </div> :
                    <div className="flex items-center"><BsPersonX className="text-2xl mr-1.5"></BsPersonX>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#2c2cff] border border-[#2c2cff] px-3 py-1 rounded-md" : ""
                            }>
                            Login
                        </NavLink>
                    </div>
                }
            </li>
            </ul>
        </div>
    );
};

export default Navbar;