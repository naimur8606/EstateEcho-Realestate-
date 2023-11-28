import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";

const MyReviews = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axiosPublic(`/Reviews/${user?.email}`)
            .then(res => setReviews(res.data))
    }, [axiosPublic, user])
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
                axiosPublic.delete(`/Reviews/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-4">Total Reviews: {reviews.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                reviews?.map((item, idx) =>
                    <div key={idx} className="shadow-md rounded-lg p-3 space-y-2">
                        <h4 className="text-2xl font-semibold">{item?.propertyTitle}</h4>
                        <h5 className="text-xl font-medium">Agent: {item?.agentName}</h5>
                        <h6 className="font-semibold">Review Time: {item?.ReviewTime}</h6>
                        <p className="pb-3"><span className="font-bold">Description:</span> {item?.reviewDescription}</p>
                        <button onClick={()=> handleDelete(item?._id)} className="border border-red-600 hover:bg-[#3332323c] px-6 py-2 rounded-md font-semibold text-red-500 flex items-center text-xl"><FaTrash className="mr-2"></FaTrash> Delete</button>
                    </div>
                )
            }
        </div>
        </div>
    );
};

export default MyReviews;