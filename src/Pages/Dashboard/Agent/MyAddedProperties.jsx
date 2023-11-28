import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const MyAddedProperties = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const [addedProperty, setAddedProperties] = useState([])
    useEffect(()=>{
        axiosPublic(`/Properties/myAdded/${user?.email}`)
        .then(res => setAddedProperties(res.data))
    },[axiosPublic, user])
    return (
        <div className="grid gap-5">
        <h2 className="text-center text-3xl font-semibold my-4">Added Properties: {addedProperty.length}</h2>
            {
                addedProperty?.map((property, idx) =>
                    <div key={idx} className="flex flex-col lg:flex-row justify-between lg:items-center lg:py-5 shadow-md rounded-lg">
                        <img className="lg:w-1/2" src={property?.propertyImage} alt="" />
                        <div className="lg:w-[48%] pl-2 md:pl-5 py-3 space-y-2">
                            <h2 className="text-2xl md:text-3xl font-semibold">{property?.propertyTitle}</h2>
                            <p className="font-semibold md:text-xl">Price: <span className="text-xl md:text-2xl ">{property?.priceRange}</span></p>
                            <div className="flex items-center text-xl font-semibold">
                                <FaLocationDot className="text-[#8bff11] mr-1"></FaLocationDot>{property?.propertyLocation}
                            </div>
                            <div className="flex items-center">
                                <p className="text-base md:text-xl">Status: <span className={`${property?.verificationStatus === "Verified" ? "text-green-600": property?.verificationStatus === "Redirect" ? "text-red-600" : 'text-orange-600'} font-semibold`}>{property?.verificationStatus}</span></p>
                            </div>

                            <div className="flex items-center space-x-2 text-xl font-medium">
                                <p>Agent: {property?.agentName}</p>
                                <img className="h-10 w-10 rounded-[50%]" src={property?.agentImage} alt="" />
                            </div>
                            <div className="flex space-x-3">
                                {property?.verificationStatus === 'Redirect' || <Link to={`/dashboard/updateProperty/${property?._id}`} className="bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl">Update</Link>}
                                <button className="border border-red-600 hover:bg-[#3332323c] px-6 py-2 rounded-md font-semibold text-red-500 flex items-center text-xl"><FaTrash className="mr-2"></FaTrash> Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyAddedProperties;