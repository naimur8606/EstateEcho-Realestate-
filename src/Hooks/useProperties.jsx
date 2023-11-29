import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProperties = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {refetch ,data: properties = []} = useQuery({
        queryKey: ["properties"],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/Properties/myAdded/${user?.email}`)
            return res.data;
        }
    })
    return [properties, refetch];
};

export default useProperties;