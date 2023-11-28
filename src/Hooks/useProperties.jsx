import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useProperties = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {refetch ,data: properties = []} = useQuery({
        queryKey: ["properties"],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/Properties/myAdded/${user?.email}`)
            return res.data;
        }
    })
    return [properties, refetch];
};

export default useProperties;