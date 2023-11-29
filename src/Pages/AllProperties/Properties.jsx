import { Helmet } from "react-helmet-async";
import DisplayProperties from "./DisplayProperties";

const Properties = () => {
    return (
        <div className="mt-[64px] md:mt-[80px]">
            <Helmet>
                <title>EstateEcho | Properties</title>
            </Helmet>
            <DisplayProperties></DisplayProperties>
        </div>
    );
};

export default Properties;