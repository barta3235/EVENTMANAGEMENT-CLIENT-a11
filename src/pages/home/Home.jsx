import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import HomeService from "../../components/HomeService/HomeService";

const Home = () => {
    
    const services=useLoaderData()
    const services6= services.slice(0,6)


    return (
        <div>
         <Banner></Banner>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-[5px] md:mx-[10px] mt-[80px]">
            {
               services6.map((aService)=><HomeService key={aService._id} service={aService}></HomeService>)
            }
         </div>
         <div className="flex justify-end mt-[20px] mx-[5px] md:mx-[10px]">
             <Link><button className="py-2 bg-[#7f1734] w-[120px] text-white rounded-md rounded-l-md text-[18px] font-medium px-3">Show All</button></Link>
         </div>
        </div>
    );
};

export default Home;