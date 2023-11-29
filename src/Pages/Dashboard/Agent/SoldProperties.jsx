import { Helmet } from "react-helmet-async";
import useSoldProperties from "../../../Hooks/useSoldProperties";

const SoldProperties = () => {
    const [ SoldProperties ] =useSoldProperties()
    return (
        <div>
            <Helmet>
                <title>EstateEcho | Sold Property</title>
            </Helmet>
            <div>
                <h2 className="text-4xl font-medium p-8">Total Sold Property: {SoldProperties.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th></th>
                            <th>Property Title</th>
                            <th>Location</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            SoldProperties?.map((item, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{item?.propertyTitle}</td>
                                    <td>{item?.propertyLocation}</td>
                                    <td>{item?.buyerName}</td>
                                    <td>{item?.buyerEmail}</td>
                                    <td className="font-semibold">${item?.offeredAmount}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SoldProperties;