import Swal from "sweetalert2";
import useRequestedProperties from "../../../Hooks/useRequestedProperties";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const RequestedProperties = () => {
    const axiosSecure = useAxiosSecure()
    const [RequestedProperties, refetch] = useRequestedProperties();

    const handleUpdate = (id, status) => {
        axiosSecure.patch(`/UpdateBoughtProperties/${id}`, { status })
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Property Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Yaaah'
                    })
                    refetch()
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'warning!',
                    text: `${error.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
            })
    }
    return (
        <div>
            <Helmet>
                <title>EstateEcho | Requested Property</title>
            </Helmet>
            <h1 className="text-3xl font-semibold text-center my-5">Total Requested: {RequestedProperties.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-500 text-white">
                        <tr>
                            <th></th>
                            <th>Property Title</th>
                            <th>Property location</th>
                            <th>Buyer Email</th>
                            <th>Buyer Name</th>
                            <th>Offered price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            RequestedProperties?.map((item, idx) =>
                                <tr key={idx} className="">
                                    <td>{idx + 1}</td>
                                    <td>{item?.propertyTitle}</td>
                                    <td>{item?.propertyLocation}</td>
                                    <td>{item?.buyerEmail}</td>
                                    <td>{item?.buyerName}</td>
                                    <td>{item?.offeredAmount}</td>
                                    <td>{item?.status}</td>
                                    {
                                        item?.status === "Accepted" || item?.status === "Rejected" || <td> 
                                            <button onClick={() => handleUpdate(item?._id, "Accepted")} className="bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl">Accept</button> <br />
                                            <button onClick={() => handleUpdate(item?._id, "Rejected")} className=" mt-2 border border-red-600 hover:bg-[#3332323c] px-6 py-2 rounded-md font-semibold text-red-500 flex items-center text-xl"><FaTrash className="mr-2"></FaTrash> Rejected</button>
                                        </td>
                                    }

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestedProperties;