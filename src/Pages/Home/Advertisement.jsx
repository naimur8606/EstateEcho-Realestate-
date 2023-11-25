import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Advertisement = () => {
    const axiosPublic = useAxiosPublic()
    axiosPublic('/Advertisement.json')
    .then(res => console.log(res.data))
    return (
        <div>
            
        </div>
    );
};

export default Advertisement;