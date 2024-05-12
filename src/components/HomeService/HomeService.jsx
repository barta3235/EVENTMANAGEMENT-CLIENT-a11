import { Link } from "react-router-dom";
import { MdOutlineEventNote } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

const HomeService = ({ service }) => {

    const { _id, servicename, imageservice, description, name, userimage, price } = service
    const description100 = description.slice(0, 95);

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 h-full border rounded-lg">
            <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">

                <div>
                    <a rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={imageservice} />
                        <div className="p-6 space-y-2 mt-[10px]">
                            <h3 className="text-[20px] font-medium flex items-center gap-1"><MdOutlineEventNote></MdOutlineEventNote>{servicename}</h3>
                            <h1 className="text-justify pt-2 pr-2">{description100} .....</h1>
                            <h1 className="text-[20px] font-medium flex items-center gap-1">Service Price: ${price}</h1>
                        </div>
                        <div className="bg-base-200 p-1 flex items-center justify-between rounded-md">
                            <div className="flex items-center gap-5 px-1">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={userimage} alt="" />
                                    </div>
                                </div>
                                <h1 className="flex text-[19px] font-medium gap-2 items-center"><IoPerson></IoPerson> {name}</h1>
                            </div>
                            <div className="flex justify-end">
                                <Link to={`/eachService/${_id}`}><button className="font-medium flex p-1 w-[110px] text-[#7f1734] hover:bg-[#7f1734] hover:text-white text-[18px] rounded-md justify-center">View Details</button></Link>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

    );
};

export default HomeService;