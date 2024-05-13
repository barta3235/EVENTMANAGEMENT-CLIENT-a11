import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {


    const{_id,servicearea,servicename,imageservice,description,name,email,userimage,price}=useLoaderData()
    const nav= useNavigate();

    const handleUpdate=(e)=>{
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

        const updateService={servicearea,servicename,imageservice,description,name,email,userimage,price};
        console.log(updateService);

        axios.put(`http://localhost:5000/updateService/${_id}`,updateService)
        .then(data=>{
            if(data.data.modifiedCount>0){
                Swal.fire({
                    icon: "success",
                    text: "Service is updated!",
                    timer: 1500,
                    showConfirmButton: false,
                  })
 
            }
            nav('/manageService')
        })
    }

    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleUpdate} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-[20px]">Update Service Information</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="font-medium">Service Area</label>
                            <input id="firstname" name="servicearea" defaultValue={servicearea} type="text" placeholder="Location" className="w-full rounded-md border py-2 pl-1" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lang" className="font-medium">Service Name</label>
                            <br />
                            <select className="pl-1 border w-full rounded-md py-2" defaultValue={servicename} name="servicename" id="lang">
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
                            <input id="img" name="imageservice" defaultValue={imageservice} type="text" placeholder="Image url for the service" className="w-full rounded-md border py-2 pl-1" required />
                        </div>
                        <br />
                        <div className="col-span-full sm:col-span-3 mt-5">
                            <label htmlFor="img" className="font-semibold">Price</label>
                            <input id="img" name="price" defaultValue={price} type="text" placeholder="Eg. 300" className="w-full rounded-md border py-2 pl-1" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="font-medium">Description</label>
                            <textarea id="bio" placeholder="" defaultValue={description} name="description" className="w-full rounded-md border"></textarea>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Update Profile</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="font-medium">Name</label>
                            <input id="username" name="name" type="text" defaultValue={name} className="w-full rounded-md border py-2 pl-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="font-medium">Email</label>
                            <input id="website" type="email" name="email" defaultValue={email} className="w-full rounded-md border py-2 pl-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="font-medium">Photo</label>
                            <input id="website" type="text" name="userimage" defaultValue={userimage} className="w-full rounded-md border py-2 pl-1" />
                        </div>
                    </div>
                </fieldset>
                <div className="flex justify-end">
                    <input type="submit" value="Update Service" className="border py-2 rounded-lg font-medium bg-[#7f1734] text-white w-[150px]" />
                </div>
            </form>
        </section>
    );
};

export default UpdateService;