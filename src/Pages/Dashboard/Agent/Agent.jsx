import { FaBook, FaList } from "react-icons/fa";
import { FaListCheck, FaShop } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useProperties from "../../../Hooks/useProperties";
import useRequestedProperties from "../../../Hooks/useRequestedProperties";
import useSoldProperties from "../../../Hooks/useSoldProperties";

const Agent = ({setMenu}) => {
    const [properties] = useProperties()
    const [RequestedProperties] = useRequestedProperties()
    const [SoldProperties] = useSoldProperties()
    return (
        <>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/addProperty"}><FaList></FaList>Add Property</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/addedProperty"}><FaListCheck></FaListCheck>My Added Property({properties.length})</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/soldProperty"}><FaShop></FaShop>My Sold Property({SoldProperties.length})</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setMenu(false)} to={"/dashboard/requestedProperty"}><FaBook></FaBook>Requested Property({RequestedProperties.length})</NavLink>
            </li>
        </>
    );
};

export default Agent;