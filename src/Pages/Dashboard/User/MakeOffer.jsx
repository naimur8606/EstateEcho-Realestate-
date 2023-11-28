import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const MakeOffer = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const property = useLoaderData()
    const [priceAlert, setPriceAlert] = useState(false)
    const [offerPrice, setOfferPrice] = useState(0)
    console.log(property)
    const handlePrice = (e) => {
        const price = parseInt(e.target.value)
        const numericValues = property.priceRange.replace(/[^0-9,-]/g, '').split('-');
        const intValues = numericValues.map(value => parseInt(value.replace(/,/g, ''), 10));
        const lowerPrice = intValues[0]
        const higherPrice = intValues[1]
        if(lowerPrice <= price && higherPrice >= price){
            setPriceAlert(false)
            setOfferPrice(price)
        }else{
            setPriceAlert(true)
        }
    }
    const handleBoughtProperty = (e) =>{
        e.preventDefault()
        const boughtProperty ={
            propertyLocation:property?.propertyLocation,
            propertyTitle:property?.propertyTitle,
            propertyImage:property?.propertyImage,
            AgentName:property?.agentName,
            offeredAmount:offerPrice,
            priceRange:property?.priceRange,
            buyerName:user?.displayName,
            buyingDate:e.target.date.value,
            PropertyId:property?.PropertyId,
            buyerEmail:user?.email,
            status:'pending'
        }
        axiosPublic.post('/boughtProperties', boughtProperty)
            .then(data => {
                console.log(data);
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Offer Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Yaaah'
                    })
                }
            })
    }
    return (
        <div>
            <h2 className="text-center text-4xl font-bold">Make an Offer</h2>
            <form onSubmit={handleBoughtProperty} className="space-y-3">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Property Name:</span>
                    </label>
                    <input defaultValue={property?.propertyTitle} type="text" placeholder="email" className="input input-bordered" disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Property location:</span>
                    </label>
                    <input defaultValue={property?.propertyLocation} type="text" placeholder="email" className="input input-bordered" disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Agent Name:</span>
                    </label>
                    <input defaultValue={property?.agentName} type="text" placeholder="email" className="input input-bordered" disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Price(${property?.priceRange})**:</span>
                    </label>
                    <input onChange={handlePrice} defaultValue={property?.priceRange} type="number" name="price" className="input input-bordered" required/>
                    {
                        priceAlert && <p className="text-red-500">Please enter in price range !</p>
                    }
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Buyer Email:</span>
                    </label>
                    <input defaultValue={user?.email} type="text" placeholder="email" className="input input-bordered" disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Buyer Name:</span>
                    </label>
                    <input defaultValue={user?.displayName} type="text" placeholder="email" className="input input-bordered" disabled />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Buying date**:</span>
                    </label>
                    <input type="date" name="date" placeholder="enter date" className="input input-bordered" required />
                </div>
                <button type="submit" className="bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl">Submit</button>
            </form>
        </div>
    );
};

export default MakeOffer;