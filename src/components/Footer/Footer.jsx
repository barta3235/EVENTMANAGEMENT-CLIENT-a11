import { SiDreamstime } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <footer className="py-6 bg-[#7f1734] mt-[50px]">
            <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                            <h1 className="flex items-center gap-2"><h1 data-aos="fade-right"><SiDreamstime className="text-[40px] text-white"></SiDreamstime></h1><span data-aos="fade-down" className="self-center text-[38px] text-white font-bold">Dreamscape</span></h1>
                        </a>
                    </div>
                    <div className="col-span-6 md:text-left md:col-span-3 text-start mt-[15px] text-white font-medium">
                        <ul>
                            <li className="mb-[7px]">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="mb-[7px]">
                                <Link to='/allServices'>Services</Link>
                            </li>
                            <li className="mb-[7px]">
                                <Link>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6 text-white font-medium">
                        <span>©2024 All rights reserved</span>
                        <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
                           <FaSquareFacebook className="text-[35px] text-white"></FaSquareFacebook>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
                            <BsLinkedin className="text-[32px] text-white"></BsLinkedin>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;