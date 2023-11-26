
const PropertiesBanner = () => {
    return (
        <div className="">
            <img className="w-full h-64 md:h-80 lg:h-[500px]" src="https://i.ibb.co/QQZjgBD/featured.jpg" alt="" />
            <div className="absolute top-[64px] md:top-[80px] text-white z-50 max-w-6xl mx-auto w-full h-64 md:h-80 lg:h-[500px] bg-[#322f2f8b] flex items-center">
                <div className="ml-5 md:ml-20">
                    <h6 className="text-xl md:text-2xl">Welcome To EstateEcho</h6>
                    <h1 className="text-4xl md:text-6xl">All Luxury Apartments</h1>
                </div>
            </div>
        </div>
    );
};

export default PropertiesBanner;