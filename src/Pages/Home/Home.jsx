import Advertisement from "./Advertisement";
import Banner from "./Banner";
import CommonHomeAdd from "./CommonHomeAdd";
import Contact from "./Contact";
import NeighborInto from "./NeighborInto";
import UserReviews from "./UserReviews";

const Home = () => {
    return (
        <div>
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