import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch ,data: Users = []} = useQuery({
        queryKey: ["Users"],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/Users`)
            return res.data;
        }
    })
    return [Users, refetch];
};

export default useUsers;