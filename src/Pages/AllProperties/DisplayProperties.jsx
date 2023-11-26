import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DisplayProperties = () => {
    const [properties, setProperties] = useState([])
    const axiosPublic = useAxiosPublic()
    axiosPublic("/Apartments.json")
        .then(res => setProperties(res.data))
    console.log(properties)
    return (
        <div>

        </div>
    );
};

export default DisplayProperties;