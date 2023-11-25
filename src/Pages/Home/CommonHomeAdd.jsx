import { Link } from "react-router-dom";
import { GoLinkExternal } from 'react-icons/go'
import CommonTitle from "../../Shared-Components/CommonTitle";

const CommonHomeAdd = () => {
    return (
        <div className="my-10 w-[97%] lg:w-full mx-auto">
             <CommonTitle title={'Buy your beautiful apartment'}></CommonTitle>
             <p className="md:w-3/4 lg:w-2/3 mx-auto text-justify md:text-center my-8">Elevate your lifestyle with our luxurious apartments. Immerse yourself in contemporary design, unparalleled elegance, and breathtaking views. Don't miss out – buy your beautiful apartment today and embrace sophisticated living at its finest.</p>
             <div className="flex justify-center">
                <Link to={"/properties"} className="flex items-center bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white">Explore All<GoLinkExternal className="ml-2"></GoLinkExternal></Link>
             </div>
        </div>
    );
};

export default CommonHomeAdd;