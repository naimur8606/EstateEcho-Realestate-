import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useBoughtProperties = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {refetch ,data: BoughtProperties = []} = useQuery({
        queryKey: ["BoughtProperties"],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/boughtProperties/${user?.email}`)
            return res.data;
        }
    })
    return [BoughtProperties, refetch];
};

export default useBoughtProperties;