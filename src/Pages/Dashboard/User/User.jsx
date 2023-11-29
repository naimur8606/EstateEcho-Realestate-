import { FaAd, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useWishlist from "../../../Hooks/useWishlist";
import useBoughtProperties from "../../../Hooks/useBoughtProperties";
import useReviews from "../../../Hooks/useReview";

const User = ({setMenu}) => {
    const [wishlist] = useWishlist()
    const [reviews] = useReviews()
    const [BoughtProperties] = useBoughtProperties()
    return (
        <>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/wishlist"}><FaList></FaList>Wishlist({wishlist.length})</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/boughtProperties"}><FaShoppingCart></FaShoppingCart>Property bought({BoughtProperties.length})</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/myReviews"}><FaAd></FaAd>My Review({reviews.length})</NavLink>
            </li>
        </>
    );
};

export default User;