import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import EachBooking from "./EachBooking";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const BookedServices = () => {

    const { user } = useContext(AuthContext);
    const [bookingSet, SetBookingSet] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/bookedServices/${user?.email}`,{withCredentials:true})
            .then((data) => {
                SetBookingSet(data.data)
            })
    }, [user?.email])



    return (
        <div>
            <Helmet>
                <title>Booked Services</title>
            </Helmet>
            <h1 className="mx-[7px] mt-[50px] md:mx-[40px] mb-[20px] bg-[#7f1734] w-[100px] p-1 text-center rounded-full text-white font-medium">Bookings - {bookingSet.length}</h1>

            {
                bookingSet?.length > 0 ? <div className="mt[10px] mx-[7px] md:mx-[40px] flex flex-col gap-8">
                    {
                        bookingSet.map((singleBooking) => <EachBooking key={singleBooking._id} booking={singleBooking}></EachBooking>)
                    }
                </div> : <div className="mx-[7px] mt-[30px] md:mx-[40px] other h-[500px] flex flex-col md:flex-row justify-end pb-14 md:pb-0 md:justify-around gap-4 items-center p-2 md:p-5">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold bg-black bg-opacity-50 rounded-lg md:w-[400px] p-3">Our services haven't seemed to entice you yet.</h1>
                     <div className="flex flex-col gap-5"><h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold bg-black bg-opacity-50 rounded-lg md:w-[400px] p-3">Explore our latest curated events!</h1><Link to='/allServices' className="text-white text-2xl w-[150px] text-center rounded-md font-medium hover:bg-black bg-black bg-opacity-50">Click here</Link></div>
                </div>
            }
        </div>
    );
};

export default BookedServices;