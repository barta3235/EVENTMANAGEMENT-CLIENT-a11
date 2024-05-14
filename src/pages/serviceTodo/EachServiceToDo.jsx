import { MdEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdIntegrationInstructions } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const EachServiceToDo = ({ service, setService }) => {

    const { _id, servicearea, servicename, serviceid, price, Provideremail, useremail, username, date, instruction, serviceStatus } = service;


    const handleDecision = (value) => {
          console.log(value);
          axios.patch(`http://localhost:5000/bookedServices/${_id}`,{value})
          .then(data=>{
            if(data.data.modifiedCount){
                Swal.fire({
                    icon: "success",
                    text: "Status is updated!",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
          })
    }


    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 mb-[50px] shadow-lg">
            <div className="p-1 bg-slate-200 rounded-md">
                <h2 className="font-medium mb-[7px] leading-tight text-[12px] flex items-center gap-1"><MdEmail></MdEmail><span className="font-medium">Your Email -</span> {Provideremail}</h2>
                <h2 className="font-medium leading-tight text-[12px] flex items-center gap-1"><GoDotFill></GoDotFill> Service Id - {serviceid}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <tbody>
                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 text-[13px]">
                            <td className="p-3">
                                <p><span className="font-medium">Customer Email -</span> {useremail}</p>
                            </td>
                            <td className="p-3">
                                <p><span className="font-medium">Customer Name -</span>{username}</p>
                            </td>
                            <td className="p-3">
                                <p className="flex gap-1 items-center"><SlCalender></SlCalender><span className="font-medium">Date of Service -</span>{date}</p>
                                <p className="dark:text-gray-600 text-red-800 flex gap-1 items-center">< MdIntegrationInstructions></MdIntegrationInstructions><span className="font-medium">Instructions -</span> {instruction}</p>
                            </td>
                            <td className="p-3">
                                <p className="flex gap-1 items-center"><MdHomeRepairService></MdHomeRepairService><span className="font-medium">Service -</span> {servicename}</p>
                                <p className="dark:text-gray-600 flex items-center gap-1"><IoLocationSharp></IoLocationSharp><span className="font-medium">Location -</span> {servicearea}</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>${price}</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                    <form  action="">
                                        <select onChange={(e)=>handleDecision(e.target.value)} defaultValue={serviceStatus} name="term" id="" className="rounded-lg p-1">
                                            <option value='pending'>pending</option>
                                            <option value="working">working</option>
                                            <option value="completed">completed</option>

                                        </select>
                                    </form>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EachServiceToDo;