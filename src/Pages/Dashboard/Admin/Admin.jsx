import { FaBook, FaList, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAllProperties from "../../../Hooks/useAllProperties";
import useUsers from "../../../Hooks/useUsers";

const Admin = ({setMenu}) => {
    const [AllProperties] = useAllProperties()
    const [Users] = useUsers()
    return (
        <>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/manageProperties"}><FaList></FaList>Manage Properties({AllProperties.length})</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/users"}><FaUsers></FaUsers>Manage Users({Users.length})</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/manageReviews"}><FaBook></FaBook>Manage reviews</NavLink>
            </li>
        </>
    );
};

export default Admin;