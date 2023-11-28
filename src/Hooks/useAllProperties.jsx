import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProperties = () => {
    const axiosPublic = useAxiosPublic()
    const {refetch ,data: AllProperties = []} = useQuery({
        queryKey: ["AllProperties"],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/allProperties`)
            return res.data;
        }
    })
    return [AllProperties, refetch];
};

export default useAllProperties;