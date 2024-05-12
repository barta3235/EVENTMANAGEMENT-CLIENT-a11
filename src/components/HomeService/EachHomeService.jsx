import { Link, useLoaderData } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";
import { RiMoneyPoundCircleLine } from "react-icons/ri";

const EachHomeService = () => {

    const { _id, servicearea, servicename, imageservice, description, name, email, userimage, price } = useLoaderData();

    return (
        <section>
            <div className="dark:bg-violet-600">
                <div className="container flex md:flex-row flex-col gap-10 justify-between px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50 bg-slate-200">

                    <div className="text-start">
                        <h1 className="mb-[30px] font-medium text-2xl">Service Provider Information</h1>
                        <div className="text-start lg:border-l lg:border-black lg:pl-4">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={userimage} />
                                </div>
                            </div>
                            <div className="flex gap-1 items-center text-[20px] mt-[20px] mb-[10px]"><IoPerson></IoPerson><h1>{name}</h1></div>
                            <div className="flex gap-1 items-center text-[20px] mb-[15px]"><MdEmail></MdEmail><h1>{email}</h1></div>
                            <div className="flex gap-1 items-center text-[18px] font-medium text-[#7f1734]"><IoLocation></IoLocation><h1><span className="font-medium">Service Area - </span> {servicearea}</h1></div>
                        </div>
                        <div className="mt-[50px]">
                            <Link to={`/bookNow/${_id}`}><button className="p-1 font-medium bg-[#7f1734] rounded-md text-white">Book Now</button></Link>
                        </div>
                    </div>


                    <div className="md:w-1/2 text-start">
                        <h1 className="mb-[30px] font-medium text-2xl">Service Information</h1>
                        <div className="lg:border-l lg:border-black lg:pl-4">
                            <h1 className="flex gap-2 items-center text-[20px] mt-[20px] mb-[10px]"><BsCalendar4Event></BsCalendar4Event>{servicename}</h1>
                            <h1 className="flex gap-2 items-center text-[20px] mb-[15px] font-semibold"><RiMoneyPoundCircleLine></RiMoneyPoundCircleLine><h1>Price: {price}</h1></h1>
                            <h1 className="text-justify text-sm">{description}</h1>
                        </div>
                    </div>


                </div>
            </div>
            <img src={imageservice} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
        </section>

    );
};

export default EachHomeService;