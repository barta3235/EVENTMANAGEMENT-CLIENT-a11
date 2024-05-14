import { Link, } from "react-router-dom";
import { SiDreamstime } from "react-icons/si";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoIosLogOut } from "react-icons/io";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    const [theme, setTheme] = useState('light')

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log('Loggedout')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme])

    const handleScreenLight = (e) => {
        if (e.target.checked) {
            setTheme('sunset')
        } else {
            setTheme('light')
        }
    }

    const navlinks = <>
        <li><Link to='/' className='border-0 border-collapse bg-white mr-3 text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734]'>Home</Link></li>
        <li><Link to='/allServices' className=' bg-white mr-3 text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734]'>Services</Link></li>
        <li className="mr-4">
            <details className="dropdown dropdown-hover">
                <summary className="text-[18px] font-semibold text-[#7f1734] hover:text-white hover:bg-[#7f1734]">Dashboard</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/addService'>Add Service</Link></li>
                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/manageService'>Manage Service</Link></li>
                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/bookedServices'>Booked-Services</Link></li>
                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/servicesTodo'>Service-To-Do</Link></li>
                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/feedback'>Feedback</Link></li>
                </ul>
            </details>

        </li>
        {
            user ? '' : <li><Link to='/login' className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] mr-3'>Login</Link></li>
        }
        {
            user ? <a data-tooltip-id="my-tooltip" data-tooltip-content="Log Out"><li><button onClick={handleLogOut} className=' bg-white text-[16px] font-medium border-2 hover:bg-white rounded-full mr-4 border-[#7f1734]'><IoIosLogOut></IoIosLogOut></button></li></a> : ''
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
                        <li><Link to='/' className=' bg-white mr-3 text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3'>Home</Link></li>
                        <li><Link className=' bg-white mr-3 text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3'>Services</Link></li>
                        <li className="mr-4">
                            <details className="dropdown py-3">
                                <summary className="text-[18px] font-semibold text-[#7f1734] hover:text-white hover:bg-[#7f1734]">Dashboard</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/addService'>Add Service</Link></li>
                                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/manageService'>Manage Service</Link></li>
                                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/bookedServices'>Booked-Services</Link></li>
                                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/servicesTodo'>Service-To-Do</Link></li>
                                    <li><Link className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734] py-3' to='/feedback'>Feedback</Link></li>
                                </ul>
                            </details>
                        </li>
                        {
                            user ? '' : <li><Link to='/login' className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734]'>Login</Link></li>
                        }
                        {
                            user ? <li><button onClick={handleLogOut} className=' bg-white text-[18px] font-medium hover:border-b-4 hover:bg-white rounded-none hover:border-b-[#7f1734]'>Log Out</button></li> : ''
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-1 md:gap-6 lg:gap-10"><Link to='/'><a className="text-2xl md:text-[22px] font-bold text-[#7f1734] flex items-center gap-1"><h1>Dreamscape</h1><SiDreamstime></SiDreamstime></a></Link> <label className="swap swap-rotate mr-4">
                    <input onChange={handleScreenLight} type="checkbox" className="theme-controller" value="synthwave" />
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label></div>
            </div>


            <div className=" lg:flex">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navlinks}
                </ul>

                <div className="avatar">
                    <div className="w-[30px] md:w-[45px] rounded-full">
                        <a data-tooltip-id="my-tooltip" data-tooltip-content={user ? user?.displayName : 'No User'}><img src={user ? user?.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} /></a>
                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;