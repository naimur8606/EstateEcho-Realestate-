import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ManageReviews = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allReviews = [], refetch } = useQuery({
        queryKey: ['allReviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/Reviews');
            return res.data;
        }
    })
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/Reviews/${id}`)
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
        <div>
            <Helmet>
                <title>EstateEcho | Manage Reviews</title>
            </Helmet>
            <h2 className="text-center text-3xl font-semibold my-4">Total Reviews: {allReviews.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    allReviews?.map((item, idx) =>
                        <div key={idx} className="shadow-md rounded-lg p-3 space-y-2">
                            <h4 className="text-2xl font-semibold">{item?.propertyTitle}</h4>
                            <div className="flex items-center space-x-2 text-xl font-medium">
                                <p>Reviewer: {item?.reviewerName}</p>
                                <img className="h-10 w-10 rounded-[50%]" src={item?.reviewerImage} alt="" />
                            </div>
                            <h6 className="font-semibold">Reviewer Email: {item?.reviewerEmail}</h6>
                            <p className="pb-3"><span className="font-bold">Review:</span> {item?.reviewDescription}</p>
                            <button onClick={() => handleDelete(item?._id)} className="border border-red-600 hover:bg-[#3332323c] px-6 py-2 rounded-md font-semibold text-red-500 flex items-center text-xl"><FaTrash className="mr-2"></FaTrash> Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageReviews;