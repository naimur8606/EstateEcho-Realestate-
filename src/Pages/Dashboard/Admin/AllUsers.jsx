import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/Users');
            return res.data;
        }
    })

    const handleChangeStatus = (email, status) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to make ${status} him...!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, Make ${status} !`
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/Users/${email}`,{status})
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Created!",
                                text: `user status change by ${status}.`,
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    const handleDeleteUser = (id, position) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete this ${position}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/Users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${position} has been deleted.`,
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
                <title>EstateEcho | All User</title>
            </Helmet>
            <div>
                <h2 className="text-4xl font-medium p-8">Total User: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td className="font-semibold">{user?.status}</td>
                                    <td className="">
                                        {user?.status === "Admin" || user?.status === "Fraud" || <button onClick={() => handleChangeStatus(user?.email,"Admin")} className="btn btn-primary btn-outline text-xl m-1">Make Admin</button>}
                                        {user?.status === "Agent" || user?.status === "Admin" ||  user?.status === "Fraud" || <button onClick={() => handleChangeStatus(user?.email,"Agent")} className="btn btn-primary btn-outline text-xl m-1">Make Agent</button>}
                                        {user?.status === "Agent" && <button onClick={() => handleChangeStatus(user?.email, "Fraud")} className="btn btn-error btn-outline text-xl m-1">Mark Fraud </button>}
                                        <button onClick={() => handleDeleteUser(user?._id, user?.status)} className="btn btn-error btn-outline text-red-600 text-3xl m-1"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;