import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const DisplayProperties = () => {
    const [properties, setProperties] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic("/Properties")
            .then(res => setProperties(res.data))
    }, [axiosPublic])
    console.log(properties)
    return (
        <div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 w-[97%] lg:w-full mx-auto">
                {
                    properties?.map((item, idx) =>
                        <div key={idx} className="space-y-2 shadow-md rounded-lg">
                            <img className="h-52 md:h-64 w-full mb-3 rounded-t-lg" src={item?.propertyImage} alt="" />
                            <div className="px-2 pb-5 space-y-3">
                                <h4 className="text-2xl font-semibold">{item?.propertyTitle}</h4>
                                <div className="flex items-center space-x-2 text-xl font-medium">
                                    <p>Agent: {item?.agentName}</p>
                                    <img className="h-10 w-10 rounded-[50%]" src={item?.agentImage} alt="" />
                                </div>
                                <div className="flex justify-between items-center font-semibold">
                                    <p className="font-semibold ">Price: $<span className="">{item?.priceRange}</span></p>

                                    <div className="flex items-center">
                                        <p className="">{item?.verificationStatus}</p>
                                        <MdVerified className="md:ml-1 text-blue-700 font-extrabold"></MdVerified>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaLocationDot className="text-[#8bff11] mr-1"></FaLocationDot>{item?.propertyLocation}
                                </div>
                                <div className="mt-5 flex justify-center">
                                        <Link to={`/properties/${item?._id}`} className="bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl">View Details</Link>
                                    </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DisplayProperties;