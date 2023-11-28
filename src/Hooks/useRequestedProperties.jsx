import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useRequestedProperties = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {refetch ,data: RequestedProperties = []} = useQuery({
        queryKey: ["RequestedProperties"],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/boughtProperties/checkAgent/${user?.email}`)
            return res.data;
        }
    })
    return [RequestedProperties, refetch];
};

export default useRequestedProperties;