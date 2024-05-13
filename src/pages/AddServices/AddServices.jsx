import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddServices = () => {

    const {user}=useContext(AuthContext)

    const handleAddService=(e)=>{
        e.preventDefault()
        const form= e.target;
        const servicearea= form.servicearea.value;
        const servicename= form.servicename.value;
        const imageservice=form.imageservice.value;
        const description= form.description.value;
        const name= form.name.value;
        const email=form.email.value;
        const userimage=form.userimage.value;
        const price= form.price.value;

        const newService={servicearea,servicename,imageservice,description,name,email,userimage,price};
        console.log(newService);

        axios.post('http://localhost:5000/services',newService)
        .then(data=>{
            if(data.data.insertedId){
                Swal.fire({
                    icon: "success",
                    text: "Service is added",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        })
        form.reset();
        
    }



    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <Helmet>
                <title>Add service</title>
            </Helmet>
            <form onSubmit={handleAddService} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-[20px]">Service Information</p>
                        <p className="text-sm">Crafting unforgettable experiences, our event management services ensure every detail is flawlessly executed.</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="font-medium">Service Area</label>
                            <input id="firstname" name="servicearea" type="text" placeholder="Location" className="w-full rounded-md border py-2 pl-1" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lang" className="font-medium">Service Name</label>
                            <br />
                            <select className="pl-1 border w-full rounded-md py-2" name="servicename" id="lang">
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
                            <input id="img" name="imageservice" type="text" placeholder="Image url for the service" className="w-full rounded-md border py-2 pl-1" required />
                        </div>
                        <br />
                        <div className="col-span-full sm:col-span-3 mt-5">
                            <label htmlFor="img" className="font-semibold">Price</label>
                            <input id="img" name="price" type="text" placeholder="Eg. 300" className="w-full rounded-md border py-2 pl-1" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="font-medium">Description</label>
                            <textarea id="bio" placeholder="" name="description" className="w-full rounded-md border"></textarea>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile Information</p>
                        <p className="text-sm">Add your relevant information so that we can reach you</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="font-medium">Name</label>
                            <input id="username" name="name" type="text" defaultValue={user?.displayName} className="w-full rounded-md border py-2 pl-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="font-medium">Email</label>
                            <input id="website" type="email" name="email" defaultValue={user?.email} className="w-full rounded-md border py-2 pl-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="font-medium">Photo</label>
                            <input id="website" type="text" name="userimage" defaultValue={user?.photoURL } className="w-full rounded-md border py-2 pl-1" />
                        </div>
                    </div>
                </fieldset>
                <div className="flex justify-end">
                    <input type="submit" value="Add Service" className="border py-2 rounded-lg font-medium bg-[#7f1734] text-white w-[150px]" />
                </div>
            </form>
        </section>
    );
};

export default AddServices;