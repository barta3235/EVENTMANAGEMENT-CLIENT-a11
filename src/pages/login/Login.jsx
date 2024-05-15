import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Login = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const { logInUser, logInUserGoogle } = useContext(AuthContext)
    const location=useLocation();
    const nav=useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.emails.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    text: "You have logged In",
                    timer: 1500,
                    showConfirmButton: false,
                });
                nav(location.state? location.state:'/')

            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    text: `${error.message}`,
                    timer: 1500,
                    showConfirmButton: false,
                });
            })
    }

    const handleGoogleSignIn = () => {
        logInUserGoogle()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    text: "You have logged In",
                    timer: 1500,
                    showConfirmButton: false,
                });
                nav(location.state? location.state:'/')
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    text: `${error.message}`,
                    timer: 1500,
                    showConfirmButton: false,
                });
            })
    }



    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-center" className="flex justify-center my-[80px]">
            <div className="w-full max-w-md p-4 rounded-md shadow-md sm:p-8 m-[7px] lg:m-0 dark:bg-gray-50 dark:text-gray-800 ">
                <h2 className="mb-5 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-600 text-[16px] font-medium">Dont have account?
                    <Link to='/signUp'><a rel="noopener noreferrer" className="focus:underline hover:underline text-red-900 text-[16px] font-medium"> Sign up here</a></Link>
                </p>
                <div className="my-6 space-y-4 hover:text-white hover:bg-[#7f1734] rounded-md">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p className="text-[16px] font-medium">Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <form onSubmit={handleSignIn} noValidate="" action="" className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2 mt-7 mb-6">
                            <label htmlFor="email" className="block text-[16px] font-medium">Email address</label>
                            <input type="email" name="emails" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-[16px] font-medium">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 rounded-md text-[16px] font-semibold bg-[#7f1734] text-white dark:text-gray-50">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;