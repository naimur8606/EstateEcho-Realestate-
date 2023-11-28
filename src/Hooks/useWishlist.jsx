import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useWishlist = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {refetch ,data: wishlist = []} = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/Wishlist/${user?.email}`)
            return res.data;
        }
    })
    return [wishlist, refetch];
};

export default useWishlist;