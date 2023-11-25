import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CommonTitle from "../../Shared-Components/CommonTitle";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineVerified, MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const Advertisement = () => {
    const axiosPublic = useAxiosPublic()
    const [advertisement, setAdvertisement] = useState([])
    axiosPublic('/Advertisement.json')
        .then(res => setAdvertisement(res.data))
    return (
        <div className="my-8">
            <CommonTitle title={'Only for you...!'}></CommonTitle>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                {
                    advertisement?.map((item, idx) =>
                        <div key={idx} className="space-y-2 shadow-md rounded-lg">
                            <img className="h-80 w-full mb-3 rounded-t-lg" src={item?.propertyImage} alt="" />
                            <div className="px-2 pb-5 space-y-3">
                            <div className="flex justify-between items-center text-2xl font-semibold">
                                <div className="flex items-center">
                                    <FaLocationDot className="text-[#8bff11] mr-3"></FaLocationDot>{item?.propertyLocation}
                                </div>
                                <div className="flex items-center">
                                    <p>{item?.verificationStatus}</p><MdVerified className="ml-3 text-blue-700 font-extrabold"></MdVerified>
                                </div>
                            </div>
                            <div className="flex justify-between items-center font-semibold">
                            <p className="text-xl font-semibold ">Price Range: <span className="text-2xl">{item?.priceRange}</span></p>
                            <Link to={item?.detailsButtonLink} className="flex items-center bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white">View Details</Link>
                            </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Advertisement;