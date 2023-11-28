import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useReviews = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {refetch ,data: reviews = []} = useQuery({
        queryKey: ["reviews"],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/Reviews/${user?.email}`)
            return res.data;
        }
    })
    return [reviews, refetch];
};

export default useReviews;