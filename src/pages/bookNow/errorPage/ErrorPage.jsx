import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className=" border-2 border-black flex  min-h-screen text-opacity-90 items-center  text-white p-4 md:p-16 dark:bg-gray-50 dark:text-gray-800 error-image">
            <div className="container bg-black flex flex-col md:h-[500px] bg-opacity-50 items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-7xl md:text-9xl dark:text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link className="bg-[#7f1734] p-2 rounded-r-full text-center font-medium" to='/'><a>Back to homepage</a></Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;