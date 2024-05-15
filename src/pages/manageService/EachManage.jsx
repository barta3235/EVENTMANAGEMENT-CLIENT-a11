import axios from "axios";
import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from 'aos'
import 'aos/dist/aos.css'

const EachManage = ({ manage, setManage, allManage }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const { _id, servicearea, servicename, imageservice, name, email, price, userimage } = manage;



    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/services/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                icon: "success",
                                text: "Service is deleted",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                        }
                     const filtered= allManage.filter((temp)=> temp._id!== _id);
                     setManage(filtered);  
                    })
            }
        });

    }


    return (
        <div className="flex rounded shadow-md overflow-hidden relative dark:bg-gray-50 dark:text-gray-800 px-2 py-4 md:gap-7 items-center">
            <div className="self-stretch flex flex-col lg:flex-row items-center px-3 flex-shrink-0 gap-3">
                <button onClick={() => handleDelete(_id)} className="lg:tooltip" data-tip="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </button>
                <Link to={`/updateService/${_id}`}> <button className="lg:tooltip" data-tip="Edit"><FaRegEdit className="text-[28px]"></FaRegEdit></button></Link>
            </div>
            <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[90px]">
                <div>
                    <h1 className="font-semibold mb-[10px] text-[18px]"># Service Information</h1>
                    <h1 className="font-medium"><span className="font-medium">Service Id -</span> {_id}</h1>
                    <h1 className="font-medium"><span className="font-medium">Category -</span> {servicename}</h1>
                    <h1><span className="font-medium">Location -</span> {servicearea}</h1>
                    <h1><span className="font-medium">Price -</span> $ {price}</h1>
                </div>
                <div className="w-[150px] flex items-center">
                    <img  className="w-full rounded-md" src={imageservice} alt="" />
                </div>
                <div>
                    <h1 className="font-semibold mb-[10px] text-[18px]"># Service Provider</h1>
                    <h1 className="font-medium"><span className="font-medium">Name -</span> {name}</h1>
                    <h1><span className="font-medium">Email -</span> {email}</h1>
                </div>
                <div data-aos="flip-up" className="w-[150px] flex items-center">
                    <img className="w-[100px]h-[100px] rounded-md" src={userimage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default EachManage;