import axios from "axios";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Review = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const {user}=useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const rating=form.rating.value;

        const newMessage = { name, email, message,rating };
        axios.post('http://localhost:5000/message', newMessage)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        text: "We heard You",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                    form.reset();
                }
            })
    }


    return (
        <div className="grid  grid-cols-1 gap-8 px-[5px] md:px-8 py-16 mx-auto rounded-lg md:grid-cols-2 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">How was our service?</h2>
                    <div className="dark:text-gray-600 text-[18px] font-medium">Help us redefine what's already the best!</div>
                </div>
                <img data-aos="fade-right" src='https://i.postimg.cc/KcknFL67/ggg.jpg' alt="" className="rounded-full w-[600px]" />
            </div>
            <form data-aos="fade-left" onSubmit={handleSubmit} noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="font-medium">Full name</label>
                    <input id="name" name="name" defaultValue={user ? user?.displayName : ''} type="text" placeholder="" className=" border w-full p-3 rounded dark:bg-[#7f1734]" />
                </div>
                <div>
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input id="email" name="email" type="email" defaultValue={user ? user?.email : ''} className="border w-full p-3 rounded dark:bg-[#7f1734]" />
                </div>
                <div>
                    <label className="font-medium">Rating</label>
                    <input id="email" name="rating" type="email" placeholder="Out of 5 Stars" className="border w-full p-3 rounded dark:bg-[#7f1734]" />
                </div>
                <div>
                    <label htmlFor="message" className="font-medium">Message</label>
                    <textarea id="message" name="message" rows="3" className="border w-full p-3 rounded dark:bg-gray-100"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide bg-[#7f1734] uppercase rounded-md text-white dark:bg-violet-600 dark:text-gray-50">Send Message</button>
            </form>
        </div>
    );
};

export default Review;