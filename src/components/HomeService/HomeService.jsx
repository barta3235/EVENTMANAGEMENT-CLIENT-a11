import { Link } from "react-router-dom";
import { MdEventNote } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const HomeService = ({ service }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const { _id, servicename, imageservice, description, name, userimage, price } = service
    const description100 = description.slice(0, 100);

    return (
        <section data-aos="zoom-in-up" className="my-8 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center  mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-6 ">
                <div className="flex flex-col  mx-4 my-6 shadow-xl hover:bg-[#7f1734] hover:bg-opacity-10">
                    <div className="px-4 py-12 rounded-t-lg  lg:px-12 dark:bg-gray-50">
                        <img className="w-full md:h-[350px]" src={imageservice} alt="" />
                        <div>
                        <h1 className="mt-[30px] mb-[10px] text-[18px] font-medium flex items-center gap-2"><MdEventNote className="text-2xl"></MdEventNote>{servicename}</h1>
                        <h1 className="my-[10px] font-medium text-[18px] flex items-center gap-2"><RiMoneyDollarCircleLine className="text-2xl"></RiMoneyDollarCircleLine>{price}</h1>
                        </div>
                        <h1 className="my-[10px] text-base flex items-center gap-2"><CgDetailsMore className="text-3xl"></CgDetailsMore> {description100}</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#7f1734]">
                        <img src={userimage} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500" />
                        <p className="text-xl font-semibold leading-tight text-white">{name}</p>
                        <Link to={`/eachService/${_id}`}><button className="text-white mt-[20px] p-2 rounded-md bg-[#410C1B] font-semibold">View Details</button></Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HomeService;