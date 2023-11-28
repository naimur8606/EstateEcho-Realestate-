import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_Image_Hosting;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProperty = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [databaseUser, setDatabaseUser] = useState({})
    useEffect(() => {
        axiosPublic(`/Users/${user?.email}`)
            .then(res => setDatabaseUser(res.data))
    }, [axiosPublic, user])
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const property = {
                propertyTitle: data.title,
                propertyLocation: data.location,
                agentName: databaseUser.name,
                agentImage: databaseUser.photoURL,
                verificationStatus: "Pending",
                priceRange: data.price,
                propertyImage: res.data.data.display_url,
                propertyDescription: data.description,
                agentEmail:databaseUser.email
            }
            axiosPublic.post('/Properties', property)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Property Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Yaaah'
                    })
                }
            })
        }

    }
    return (
        <div>
            <h2 className="text-center text-4xl font-bold">Create a Property</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Property Title:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        {...register('title', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Property location:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter location"
                        {...register('location', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Property Image:</span>
                    </label>
                    <input
                        {...register('image', { required: true })}
                        type="file"
                        className="file-input w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Agent Name:</span>
                    </label>
                    <input defaultValue={databaseUser?.name} type="text" placeholder="email" className="input input-bordered" disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Agent Email:</span>
                    </label>
                    <input defaultValue={databaseUser?.email} type="text" placeholder="email" className="input input-bordered" disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Price Range:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="enter price range"
                        {...register('price', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Description:</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="enter description"
                        {...register('description', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </div>
    );
};

export default AddProperty;