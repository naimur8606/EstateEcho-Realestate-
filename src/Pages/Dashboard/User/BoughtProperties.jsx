import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const BoughtProperties = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const [boughtProperties, setBoughtProperties] = useState([])
    useEffect(() => {
        axiosPublic(`/boughtProperties/${user?.email}`)
            .then(res => setBoughtProperties(res.data))
    }, [axiosPublic, user])
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold my-5">Total Bought Property: {boughtProperties.length}</h2>
            <div className="grid gap-5">
            {
                boughtProperties?.map((item, idx) =>
                    <div key={idx} className="space-y-2 flex flex-col md:flex-row shadow-md rounded-lg">
                        <img className="h-52 md:h-64 md:w-1/2 mb-3 rounded-t-md md:rounded-none" src={item?.propertyImage} alt="" />
                        <div className="pl-5 pb-5 space-y-2">
                            <h4 className="text-2xl font-semibold">{item?.propertyTitle}</h4>
                            <div className="flex items-center text-xl">
                                <FaLocationDot className="text-[#8bff11] mr-1"></FaLocationDot>{item?.propertyLocation}
                            </div>
                            <div className={`text-xl font-semibold ${item?.status === 'accepted' ? 'text-green-700' : 'text-[rgb(247,159,105)]'} underline-offset-2`}>Status: {item?.status}</div>
                            <div className="font-medium space-y-1">
                                <p className="text-xl">Offered Price: $<span className="">{item?.offeredAmount}</span></p>
                                <p className="">Price: <span className="">{item?.priceRange}</span></p>
                            </div>
                            <div className="flex items-center text-xl font-medium">
                                <p>Agent: {item?.AgentName}</p>
                            </div>
                            {item?.status === 'accepted' && <div className="mt-5">
                                <Link to={`/dashboard/payment`} className="bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl">Pay</Link>
                            </div>}
                        </div>
                    </div>
                )
            }
        </div>
        </div>
    );
};

export default BoughtProperties;