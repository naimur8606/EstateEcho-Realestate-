import { FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [databaseUser, setDatabaseUser] = useState();
    useEffect(()=>{
        axiosSecure(`/Users/specific/${user?.email}`)
        .then(res => setDatabaseUser(res.data))
    },[axiosSecure,user])
    return (
        <div>
            <Helmet>
                <title>EstateEcho | Profile</title>
            </Helmet>
            {
                user?.photoURL? <img className="h-32" src={databaseUser?.photoURL} alt="" />:
                <FaUser className="text-7xl"></FaUser>
            }
            <h5 className="text-3xl font-semibold mt-8">Name: {databaseUser?.name}</h5>
            <h5 className="text-2xl font-semibold mt-3">Email: {databaseUser?.email}</h5>
            <h5 className="text-2xl font-semibold mt-3">User Role: {databaseUser?.status}</h5>
        </div>
    );
};

export default UserProfile;