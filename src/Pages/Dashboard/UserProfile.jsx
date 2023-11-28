import { FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const UserProfile = () => {
    const user = useLoaderData();
    return (
        <div>
            {
                user?.photoURL? <img className="h-32" src={user?.photoURL} alt="" />:
                <FaUser className="text-7xl"></FaUser>
            }
            <h5 className="text-3xl font-semibold mt-8">Name: {user?.name}</h5>
            <h5 className="text-2xl font-semibold mt-3">Email: {user?.email}</h5>
            <h5 className="text-2xl font-semibold mt-3">User Role: {user?.status}</h5>
        </div>
    );
};

export default UserProfile;