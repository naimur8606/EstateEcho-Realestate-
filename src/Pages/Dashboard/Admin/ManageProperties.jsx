import Swal from "sweetalert2";
import useAllProperties from "../../../Hooks/useAllProperties";
import { FaTrash } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageProperties = () => {
    const [AllProperties, refetch] = useAllProperties()
    const axiosSecure = useAxiosSecure();

    const handleUpdate = (id, status) => {
        axiosSecure.patch(`/Properties/statusUpdate/${id}`, { status })
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
                <title>EstateEcho | Manage Properties</title>
            </Helmet>
        <h1 className="text-3xl font-semibold text-center my-5">Total Properties: {AllProperties.length}</h1>
        <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Property Title</th>
                            <th>Property location.</th>
                            <th>Agent name</th>
                            <th>Agent email</th>
                            <th>Price range</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllProperties?.map((item, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{item?.propertyTitle}</td>
                                    <td>{item?.propertyLocation}</td>
                                    <td>{item?.agentName}</td>
                                    <td>{item?.agentEmail}</td>
                                    <td>{item?.priceRange}</td>
                                    {
                                        item?.verificationStatus === "Verified" || item?.verificationStatus === "Rejected" || <td>
                                            <button onClick={() => handleUpdate(item?._id, "Verified")} className="bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl flex items-center">
                                                <MdVerified className="mr-2"></MdVerified> Verify
                                            </button> <br />
                                            <button onClick={() => handleUpdate(item?._id, "Rejected")} className="border border-red-600 hover:bg-[#3332323c] px-6 py-2 rounded-md font-semibold text-red-500 flex items-center text-xl">
                                                <FaTrash className="mr-2"></FaTrash> Rejected
                                            </button>
                                        </td>
                                    }
                                    { item?.verificationStatus === "Verified" &&
                                        <td className="text-center font-semibold">
                                            Verified
                                        </td>
                                        
                                    }
                                    { item?.verificationStatus === "Rejected" &&
                                        <td className="text-center font-semibold">
                                            Rejected
                                        </td>
                                    }
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProperties;