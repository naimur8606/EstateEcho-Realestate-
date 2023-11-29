import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRequestedProperties = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {refetch ,data: RequestedProperties = []} = useQuery({
        queryKey: ["RequestedProperties"],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/boughtProperties/checkAgent/${user?.email}`)
            return res.data;
        }
    })
    return [RequestedProperties, refetch];
};

export default useRequestedProperties;