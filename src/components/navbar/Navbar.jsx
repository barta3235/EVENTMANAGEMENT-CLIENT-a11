import { Link, } from "react-router-dom";
import { SiDreamstime } from "react-icons/si";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoIosLogOut } from "react-icons/io";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);


    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log('Loggedout')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const navlinks = <>
        <li><Link to='/' className='border-0 border-collapse bg-white mr-3 text-[22px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734]'>Home</Link></li>
        <li><Link to='/allServices' className=' bg-white mr-3 text-[22px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734]'>Services</Link></li>
        <li className="mr-4">
            <details className="dropdown dropdown-hover">
                <summary className="text-[22px] font-semibold text-[#7f1734] hover:text-white hover:bg-[#7f1734]">Dashboard</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/addService'>Add Service</Link></li>
                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/manageService'>Manage Service</Link></li>
                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/bookedServices'>Booked-Services</Link></li>
                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/servicesTodo'>Service-To-Do</Link></li>
                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/feedback'>Feedback</Link></li>
                </ul>
            </details>
        </li>
        {
            user ? '' : <li><Link to='/login' className=' bg-white text-[22px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] mr-3'>Login</Link></li>
        }
        {
            user ? <a data-tooltip-id="my-tooltip" data-tooltip-content="Log Out"><li><button onClick={handleLogOut} className=' bg-white text-[22px] font-medium border-2 hover:bg-white rounded-full mr-4 border-[#7f1734]'><IoIosLogOut></IoIosLogOut></button></li></a> : ''
        }
    </>

    return (
        <div className="navbar bg-white fixed z-20 flex justify-between">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 pr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[25px] w-[25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className=' bg-white mr-3 text-[22px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3'>Home</Link></li>
                        <li><Link className=' bg-white mr-3 text-[22px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3'>Services</Link></li>
                        <li className="mr-4">
                            <details className="dropdown py-3">
                                <summary className="text-[22px] font-semibold text-[#7f1734] hover:text-white hover:bg-[#7f1734]">Dashboard</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/addService'>Add Service</Link></li>
                                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/manageService'>Manage Service</Link></li>
                                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/bookedServices'>Booked-Services</Link></li>
                                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/servicesTodo'>Service-To-Do</Link></li>
                                    <li><Link className=' bg-white text-[20px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/feedback'>Feedback</Link></li>
                                </ul>
                            </details>
                        </li>
                        {
                            user ? '' : <li><Link to='/login' className=' bg-white text-[22px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734]'>Login</Link></li>
                        }
                        {
                            user ? <li><button onClick={handleLogOut} className=' bg-white text-[22px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734]'>Log Out</button></li> : ''
                        }
                    </ul>
                </div>
                <Link to='/'><a className="text-2xl md:text-[28px] font-bold text-[#7f1734] flex items-center gap-1"><h1>Dreamscape</h1><SiDreamstime></SiDreamstime></a></Link>
            </div>
            <div className=" lg:flex">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navlinks}
                </ul>
                <div className="avatar">
                    <div className="w-[50px] md:w-[60px] rounded-full">
                        <a data-tooltip-id="my-tooltip" data-tooltip-content={user? user?.displayName : 'No User'}><img src={user ? user?.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} /></a>
                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;