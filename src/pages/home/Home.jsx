import { Link, useLoaderData } from "react-router-dom";
import HomeService from "../../components/HomeService/HomeService";
import { Helmet } from "react-helmet-async";
import Review from "../../components/review/Review";
import Gallery from "../../components/gallery/Gallery";
import { BiWorld } from "react-icons/bi";
import Banner from "../../components/banner/Banner";
const Home = () => {

    const services = useLoaderData()
    const services6 = services.slice(0, 6)


    return (
        <div>
            <Helmet>
                <title>Dreamscape | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="text-center mt-[80px] mb-[40px] mx-[10px] text-3xl md:text-5xl font-medium flex items-center md:gap-2 justify-center">
                <h1>Our events worldwide</h1><BiWorld className="text-[#7f1734] text-7xl"></BiWorld>
            </div>
            <Gallery></Gallery>
            <div className="text-center mt-[40px] text-3xl md:text-5xl font-bold flex items-center gap-2 justify-center">
                <h1>Popular events</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:mx-[10px] mt-[5px] md:mt-[10px]">
                {
                    services6.map((aService) => <HomeService key={aService._id} service={aService}></HomeService>)
                }
            </div>
            <div className="flex justify-end mt-[20px] mx-[5px] md:mx-[10px]">
                <Link to='allServices'><button className="py-2 bg-[#7f1734] w-[120px] text-white rounded-md rounded-l-md text-[18px] font-medium px-3 md:mr-[40px]">Show All</button></Link>
            </div>


            <div className="mb-[25px] mt-[20px] bg-fixed text-white menu-edits mx-[5px] md:mx-[40px]">
                <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                        <div data-aos="zoom-in-up" className="flex flex-col justify-start m-2 lg:m-6 ">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">100+</p>
                            <p className="text-sm sm:text-base font-medium mt-[5px]">Clients</p>
                        </div>
                        <div data-aos="zoom-out-down" className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">8K</p>
                            <p className="text-sm sm:text-base font-medium mt-[5px]">Followers on social media</p>
                        </div>
                        <div  data-aos="zoom-in-up" className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">15</p>
                            <p className="text-sm sm:text-base font-medium mt-[5px]">Countries</p>
                        </div>
                        <div data-aos="zoom-out-down" className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">95%</p>
                            <p className="text-sm sm:text-base font-medium mt-[5px]">Client retention rate</p>
                        </div>
                        <div  data-aos="zoom-in-up" className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">69</p>
                            <p className="text-sm sm:text-base font-medium mt-[5px]">Years of Industry experience</p>
                        </div>
                        <div data-aos="zoom-out-down" className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">100+</p>
                            <p className="text-sm sm:text-base font-medium mt-[5px]">Successful events executed</p>
                        </div>
                    </div>
                </section>
            </div>


            <Review></Review>


        </div>
    );
};

export default Home;