import { Helmet } from "react-helmet-async";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import CommonHomeAdd from "./CommonHomeAdd";
import Contact from "./Contact";
import NeighborInto from "./NeighborInto";
import UserReviews from "./UserReviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EstateEcho | Home</title>
            </Helmet>
            <Banner></Banner>
            <CommonHomeAdd></CommonHomeAdd>
            <NeighborInto></NeighborInto>
            <Advertisement></Advertisement>
            <UserReviews></UserReviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;