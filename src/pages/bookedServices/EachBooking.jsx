import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const EachBooking = ({ booking }) => {

    const { _id,servicearea, servicename, imageservice, serviceid, price, providername, provideremail, useremail, username, date, instruction, serviceStatus } = booking;
    
    return (
        <div className="flex flex-col p-3 md:p-6 space-y-4 sm:p-4 dark:bg-gray-50 dark:text-gray-800 border rounded-md shadow-md">
            <ul className="flex flex-col divide-y dark:divide-gray-300">
                <li className="flex flex-col sm:flex-row sm:justify-between">
                    <div className="flex flex-col md:flex-row w-full md:space-x-4">
                        <div className="w-[280px] h-[164px]">
                            <img className="flex-shrink-0 object-cover w-full h-full  dark:bg-gray-500" src={imageservice} alt="Polaroid camera" />
                        </div>
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex flex-col md:flex-row justify-between w-full pb-2 md:space-x-2">
                                <div className="space-y-1 mt-[20px] md:mt-0">
                                    <div className="border p-1 rounded-md shadow-md">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8 pb-[10px]">{servicename}</h3>
                                        <p className="text-sm dark:text-gray-600 flex items-center gap-2 pt-[5px]"><IoLocationSharp></IoLocationSharp>{servicearea}</p>
                                        <p className="text-sm dark:text-gray-600 font-medium">Service Id - {serviceid}</p>
                                        <p className="text-sm dark:text-gray-600 font-medium">Price - ${price}</p>
                                        <h3 className="text-sm font-semibold leading-snug pt-[20px] flex items-center gap-1"><IoPerson></IoPerson>{providername}</h3>
                                        <p className="text-sm dark:text-gray-600 flex items-center gap-1 font-medium"><HiOutlineMailOpen></HiOutlineMailOpen>{provideremail}</p>
                                    </div>

                                </div>
                                <div className="text-left mt-[20px] md:mt-0">
                                    <div className="">
                                        <h1 className="font-medium mb-[10px]">Your Information</h1>
                                        <div className="border p-1 rounded-md shadow-md">
                                            <p className="text-sm dark:text-gray-600 font-medium flex items-center gap-1"><IoPerson></IoPerson>{username}</p>
                                            <p className="text-sm dark:text-gray-600 font-medium flex items-center gap-1"><MdOutlineEmail></MdOutlineEmail>{useremail}</p>
                                            <p className="text-sm dark:text-gray-600 font-medium flex items-center gap-1"><SlCalender></SlCalender>{date}</p>
                                            <p className="text-sm dark:text-gray-600 font-medium">Instructions - <span className="font-normal">{instruction}</span></p>
                                        </div>
                                        <button type="button" className="space-x-1 mt-[30px] mb-[20px]">
                                            <h1><span className="font-medium text-[17px]">Status - </span><span className="bg-red-700 text-sm text-white p-1 rounded-md font-medium">{serviceStatus}</span></h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default EachBooking;