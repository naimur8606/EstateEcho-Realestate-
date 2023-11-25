import Advertisement from "./Advertisement";
import Banner from "./Banner";
import CommonHomeAdd from "./CommonHomeAdd";
import NeighborInto from "./NeighborInto";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CommonHomeAdd></CommonHomeAdd>
            <NeighborInto></NeighborInto>
            <Advertisement></Advertisement>
        </div>
    );
};

export default Home;