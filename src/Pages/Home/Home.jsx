import Advertisement from "./Advertisement";
import Banner from "./Banner";
import CommonHomeAdd from "./CommonHomeAdd";
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
        </div>
    );
};

export default Home;