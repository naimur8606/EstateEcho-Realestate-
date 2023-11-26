import { Link, useNavigate } from "react-router-dom";
// import SocialLogin from "./SocialLogin";
import { signOut } from "firebase/auth";
import auth from "../../Providers/Firebase/FirebaseConfig";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const CreateUser = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser } = useAuth();
    const [useAlert, setUseAlert] = useState(true)
    const navigate = useNavigate()
    const formSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const file = e.target.image.files[0]; // Access the first file from the FileList
        const photoUrl = file ? URL.createObjectURL(file) : null;
        const password = e.target.password.value;
        if (!/^(?=.*[a-z])(?!.*[A-Z])(?=.*[0-9]).{6,}$/.test(password)) {
            return console.log("error")
        }
        // console.log(email, file, photoUrl)
        createUser(email, password)
            .then(() => {
                signOut(auth)
                const status = "user";
                const user = { name, email, photoUrl, status };
                axiosPublic.post('/users', user)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            setUseAlert(true)
                        }
                    })
                if (useAlert) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Yaaah'
                    })
                }
                navigate("/login")
            })
            .catch(error => {
                Swal.fire({
                    title: 'Warning!',
                    text: `${error.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
            });
    };
    return (
            <div className="flex items-center min-h-screen w-[97%] lg:w-full mx-auto">
                <div className="flex w-full flex-col justify-between lg:flex-row-reverse my-5">
                <img className="md:w-2/3 lg:w-2/5 mx-auto" src='https://i.ibb.co/0jhnKK2/login.gif' alt="" />
                <div className="shadow-2xl md:w-2/3 lg:w-2/5 mx-auto mt-10 lg:mt-0 p-5 rounded-lg">
                    <h1 className="text-center text-5xl font-bold">Register now!</h1>
                    <form onSubmit={formSubmit} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" name="image" placeholder="password" className="" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                    <div className="p-8">
                        <p className="text-xl">Have already account <Link to={"/login"} className="text-blue-600 underline">Login</Link></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
            </div>
    );
};

export default CreateUser;