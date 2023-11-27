import CommonTitle from "../../Shared-Components/CommonTitle";
import { GiSoundOff } from 'react-icons/gi'
import { FaPeopleGroup, } from 'react-icons/fa6'
import { MdOutlineSecurity, MdSportsCricket } from 'react-icons/md'
import { FaCar, FaSchool } from 'react-icons/fa'
import './Home.css'

const NeighborInto = () => {
    return (
        <div className="bg-[#0000009a] bg-blend-overlay bg-image text-white p-8 my-5">
            <CommonTitle title={'Get to know your neighborhood'}></CommonTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 pb-5">
                <div className="flex space-x-2">
                    <GiSoundOff className="text-6xl text-[#8bff11]"></GiSoundOff>
                    <div>
                        <h5 className="text-3xl">Quiet neighborhood</h5>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <FaPeopleGroup className="text-6xl text-[#8bff11]"></FaPeopleGroup>
                    <div>
                        <h5 className="text-3xl">Great local community</h5>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <MdSportsCricket className="text-6xl text-[#8bff11]"></MdSportsCricket>
                    <div>
                        <h5 className="text-3xl">Large play center</h5>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <FaSchool className="text-6xl text-[#8bff11]"></FaSchool>
                    <div>
                        <h5 className="text-3xl">Schools in walking distance</h5>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <FaCar className="text-6xl text-[#8bff11]"></FaCar>
                    <div>
                        <h5 className="text-3xl">Free parking place</h5>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <MdOutlineSecurity className="text-6xl text-[#8bff11]"></MdOutlineSecurity>
                    <div>
                        <h5 className="text-3xl">24/7 security</h5>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeighborInto;