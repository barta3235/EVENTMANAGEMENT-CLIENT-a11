import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const BookNow = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    const { _id, servicearea, servicename, imageservice, name, email, price } = useLoaderData();
    const nav = useNavigate();


    const handleBookNowSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const servicearea = form.servicearea.value;
        const servicename = form.servicename.value;
        const imageservice = form.imageservice.value;
        const serviceid = form.serviceid.value
        const price = form.price.value;
        const providername = form.name.value;
        const Provideremail = form.email.value;
        const username = form.uname.value;
        const useremail = form.uemail.value;
        const date = form.std.value;
        const instruction = form.sins.value;
        const serviceStatus = "pending";

        const newBooking = { servicearea, servicename, imageservice, serviceid, price, providername, Provideremail, useremail, username, date, instruction, serviceStatus }

        console.log(newBooking)

        axios.post('https://m11-eventmanagement-server.vercel.app/bookedServices', newBooking)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        text: "Your purchase is made",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                    nav('/');
                }
            })

    }





    return (
        <div>
            <Helmet>
                <title>Booking portal</title>
            </Helmet>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form onSubmit={handleBookNowSubmit} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-[20px]">Service Information</p>
                            <p className="text-sm">Crafting unforgettable experiences, our event management services ensure every detail is flawlessly executed.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="font-medium">Service Area</label>
                                <input id="firstname" defaultValue={servicearea} name="servicearea" type="text" placeholder="Location" className="w-full rounded-md border py-2 pl-1" disabled />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lang" className="font-medium">Service Name</label>
                                <br />
                                <select className="pl-1 border w-full rounded-md py-2" defaultValue={servicename} name="servicename" id="lang" disabled>
                                    <option value="Live-Music-Events">Live Music Events</option>
                                    <option value="Birthdays">Birthdays</option>
                                    <option value="Experiential-Marketing-Events">Experiential Marketing Events</option>
                                    <option value="Weddings">Weddings</option>
                                    <option value="Trade-Show-and-Expos">Trade Show and Expos</option>
                                    <option value="Corporate-COnferences">Corporate Conferences</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3 mt-5">
                                <label htmlFor="img" className="font-medium" >Image URL</label>
                                <input id="img" defaultValue={imageservice} name="imageservice" type="text" placeholder="Image url for the service" className="w-full rounded-md border py-2 pl-1" disabled />
                            </div>
                            <div className="col-span-full sm:col-span-3 mt-5">
                                <label htmlFor="img" className="font-medium" >Service Id</label>
                                <input id="img" defaultValue={_id} name="serviceid" type="text" placeholder="Image url for the service" className="w-full rounded-md border py-2 pl-1" disabled />
                            </div>
                            <br />
                            <div className="col-span-full sm:col-span-3 mt-5">
                                <label htmlFor="img" className="font-semibold">Price</label>
                                <input id="img" defaultValue={price} name="price" type="text" placeholder="Eg. 300" className="w-full rounded-md border py-2 pl-1" disabled />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Service Provider Information</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="font-medium">Name</label>
                                <input id="username" name="name" type="text" defaultValue={name} className="w-full rounded-md border py-2 pl-1" disabled />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="font-medium">Email</label>
                                <input id="website" type="email" name="email" defaultValue={email} className="w-full rounded-md border py-2 pl-1" disabled />
                            </div>
                        </div>
                    </fieldset>


                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">User Information</p>
                            <p className="text-sm">Add your relevant information so that we can reach you</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="font-medium">Name</label>
                                <input id="username" name="uname" type="text" defaultValue={user?.displayName} className="w-full rounded-md border py-2 pl-1" disabled />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="font-medium">Email</label>
                                <input id="website" type="email" name="uemail" defaultValue={user?.email} className="w-full rounded-md border py-2 pl-1" disabled />
                            </div>
                        </div>
                    </fieldset>




                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Additional Information</p>
                            <p className="text-sm">Add your relevant information so that we can reach you</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="font-medium">Date</label>
                                <input id="username" name="std" type="date" className="w-full rounded-md border py-2 pl-1" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="font-medium">Special Instruction</label>
                                <textarea id="bio" placeholder="Any instructions you wish to add" name="sins" className="w-full rounded-md border"></textarea>
                            </div>

                        </div>
                    </fieldset>

                    <div className="flex justify-end">
                        <input type="submit" value="Purchase" className="border py-2 rounded-lg font-medium bg-[#7f1734] text-white w-[150px]" />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default BookNow;