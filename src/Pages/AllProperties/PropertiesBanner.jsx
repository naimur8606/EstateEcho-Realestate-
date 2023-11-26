import { FaSearch } from "react-icons/fa";

const PropertiesBanner = () => {
    return (
        <div className="">
            <img className="w-full h-64 md:h-80 lg:h-[500px]" src="https://i.ibb.co/QQZjgBD/featured.jpg" alt="" />
            <div className="absolute top-[64px] md:top-[80px] text-white z-20 max-w-6xl mx-auto w-full h-64 md:h-80 lg:h-[500px] bg-[#322f2f8b] flex items-center">
                <div className="ml-5 md:ml-20">
                    <h6 className="text-xl md:text-2xl">Welcome To EstateEcho</h6>
                    <h1 className="text-4xl md:text-6xl">All Luxury Apartments</h1>
                    <div className="flex text-2xl mt-5 w-full">
                    <input className="pl-1 w-[55%] rounded-l-lg bg-[#ffffff29] border border-[#8bff11]" placeholder="Enter Apartment Name" type="text" /><p className="bg-[#90de3d] py-2 px-3 rounded-r-lg font-bold flex items-center">Search<FaSearch className="ml-2"></FaSearch></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesBanner;