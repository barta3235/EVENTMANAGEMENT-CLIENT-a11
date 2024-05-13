import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {createUser,addPhotoName,logOutUser}=useContext(AuthContext);
    const nav= useNavigate()
    const handleCreateUser=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.emails.value;
        const name=form.name.value;
        const photourl=form.photourl.value
        const password=form.password.value;

        if(password.length<6){
            Swal.fire({
                text: 'Password should be at least of 6 characters',
                icon: 'error',
                timer: 1500,
                showConfirmButton: false,
              })
              return
        }
        if(!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)){
            Swal.fire({
                text: 'Password should have at least one Uppercase and one lowercase letter',
                icon: 'error',
                timer: 1500,
                showConfirmButton: false,
              })
              return
        }


        //firebase auth
        createUser(email,password)
        .then(()=>{
            addPhotoName(name,photourl)
            .then(()=>{
                Swal.fire({
                    icon: "success",
                    text: "You have registered successfully. Please Login!",
                    timer: 1500,
                    showConfirmButton: false,
                });
                logOutUser()
                .then(()=>{
                    nav('/login')
                })
                .catch(error=>{
                    console.log(error.message)
                })
            })
        })
        .catch((error)=>{
            Swal.fire({
                icon: "error",
                text: `${error.message}`,
                timer: 1500,
                showConfirmButton: false,
            });
        })
    }


    return (
        <div className="flex justify-center my-[80px]">
            <div className="w-full max-w-md p-4 rounded-md shadow-md sm:p-8 m-[7px] lg:m-0 dark:bg-gray-50 dark:text-gray-800 ">
                <h2 className="mb-5 text-3xl font-semibold text-center">Register your account</h2>
                <p className="text-sm text-center dark:text-gray-600 text-[16px] font-medium">Already have an account?
                    <Link to='/login'><a rel="noopener noreferrer" className="focus:underline hover:underline text-red-900 text-[16px] font-medium"> Log in here</a></Link>
                </p>
                <form onSubmit={handleCreateUser} noValidate="" action="" className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2 mt-7 mb-6">
                            <label htmlFor="email" className="block text-[16px] font-medium">Name</label>
                            <input type="text" name="name" id="email" placeholder="Leroy Jenkins" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required/>
                        </div>
                        <div className="space-y-2 mt-7 mb-6">
                            <label htmlFor="email" className="block text-[16px] font-medium">Email address</label>
                            <input type="email" name="emails" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required/>
                        </div>
                        <div className="space-y-2 mt-7 mb-6">
                            <label htmlFor="email" className="block text-[16px] font-medium">Photo Url</label>
                            <input type="text" name="photourl" id="email" placeholder="URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required/>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-[16px] font-medium">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required/>
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 rounded-md text-[16px] font-semibold bg-[#7f1734] text-white dark:text-gray-50">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Register;