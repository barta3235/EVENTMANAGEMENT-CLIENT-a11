import { useLoaderData } from "react-router-dom";
import IndividualServiceInAllService from "./IndividualServiceInAllService";
import { Helmet } from "react-helmet-async";


const AllServices = () => {

    const services = useLoaderData();


    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-3">

                {
                    services.map((service) => <IndividualServiceInAllService key={service._id} service={service}></IndividualServiceInAllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;