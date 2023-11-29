import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

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
            <div className="">
                <img className="w-full h-64 md:h-80 lg:h-[500px]" src="https://i.ibb.co/QQZjgBD/featured.jpg" alt="" />
                <div className="absolute top-[64px] md:top-[80px] text-white z-20 max-w-6xl mx-auto w-full h-64 md:h-80 lg:h-[500px] bg-[#322f2f8b] flex items-center">
                    <div className="ml-5 md:ml-20">
                        <h6 className="text-xl md:text-2xl">Welcome To EstateEcho</h6>
                        <h1 className="text-4xl md:text-6xl">All Luxury Apartments</h1>
                        <form className="flex text-2xl mt-5 w-full">
                            <input className="pl-1 w-[55%] rounded-l-lg bg-[#ffffff29] border border-[#8bff11]" placeholder="Enter Apartment Name" type="text" /><button type="submit" className="bg-[#90de3d] py-2 px-3 rounded-r-lg font-bold flex items-center">Search<FaSearch className="ml-2"></FaSearch></button>
                        </form>
                    </div>
                </div>
            </div>
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