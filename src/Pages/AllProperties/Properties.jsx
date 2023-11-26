import DisplayProperties from "./DisplayProperties";
import PropertiesBanner from "./PropertiesBanner";

const Properties = () => {
    return (
        <div className="mt-[64px] md:mt-[80px]">
            <PropertiesBanner></PropertiesBanner>
            <DisplayProperties></DisplayProperties>
        </div>
    );
};

export default Properties;