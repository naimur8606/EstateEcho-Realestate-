import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllProperties = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch ,data: AllProperties = []} = useQuery({
        queryKey: ["AllProperties"],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/allProperties`)
            return res.data;
        }
    })
    return [AllProperties, refetch];
};

export default useAllProperties;