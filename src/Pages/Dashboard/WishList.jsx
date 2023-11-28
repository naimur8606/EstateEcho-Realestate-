import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useWishlist from "../../Hooks/useWishlist";

const WishList = () => {
    const [wishlist, refetch] = useWishlist()
    const axiosPublic = useAxiosPublic()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/Wishlist/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });

    }
    return (
        <div className="grid gap-5">
        <h2 className="text-center text-3xl font-semibold my-4">Wishes Properties: {wishlist.length}</h2>
            {
                wishlist?.map((property, idx) =>
                    <div key={idx} className="flex flex-col lg:flex-row justify-between lg:items-center lg:py-5 shadow-md rounded-lg">
                        <img className="lg:w-1/2" src={property?.propertyImage} alt="" />
                        <div className="lg:w-[48%] pl-2 md:pl-5 py-3 space-y-2">
                            <h2 className="text-2xl md:text-3xl font-semibold">{property?.propertyTitle}</h2>
                            <p className="font-semibold md:text-xl">Price: <span className="text-xl md:text-2xl ">{property?.priceRange}</span></p>
                            <div className="flex items-center text-xl font-semibold">
                                <FaLocationDot className="text-[#8bff11] mr-1"></FaLocationDot>{property?.propertyLocation}
                            </div>
                            <div className="flex items-center">
                                <p className="text-base md:text-xl">{property?.verificationStatus}</p>
                                <MdVerified className="md:ml-3 text-blue-700 font-extrabold"></MdVerified>
                            </div>

                            <div className="flex items-center space-x-2 text-xl font-medium">
                                <p>Agent: {property?.agentName}</p>
                                <img className="h-10 w-10 rounded-[50%]" src={property?.agentImage} alt="" />
                            </div>
                            <div className="flex space-x-3">
                                <Link to={`/dashboard/makeOffer/${property?._id}`} className="bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl">Make Offer</Link>
                                <button onClick={() => handleDelete(property?._id)} className="bg-black hover:bg-[#7dd321] px-6 py-2 rounded-md font-semibold text-white text-xl">Remove</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default WishList;