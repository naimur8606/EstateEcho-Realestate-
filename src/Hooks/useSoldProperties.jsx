import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSoldProperties = () => {
    const axiosSecure = useAxiosSecure()
    const {user} =useAuth()
    const {refetch ,data: SoldProperties = []} = useQuery({
        queryKey: ["SoldProperties"],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/soldProperties/${user?.email}`)
            return res.data;
        }
    })
    return [SoldProperties, refetch];
};

export default useSoldProperties;