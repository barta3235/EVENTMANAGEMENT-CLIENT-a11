import { useEffect, useState } from "react";
import IndividualServiceInAllService from "./IndividualServiceInAllService";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { SiDreamstime } from "react-icons/si";


const AllServices = () => {

    const [services, setServices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/filteredServices?page=${currentPage}&size=${itemsPerPage}&search=${search}`)
            .then(data => {
                setServices(data.data);
                setLoading(false);
            })
    }, [currentPage, itemsPerPage, search])


    useEffect(() => {
        fetch(`http://localhost:5000/services-count`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
            })
    },)


    const numberOfPages = Math.ceil(count / itemsPerPage);
    console.log(numberOfPages);

    const pages = [...Array(numberOfPages).keys()].map(element => element + 1);


    const handlePagination = (value) => {
        console.log(value);
        setCurrentPage(value);
    }
    console.log(currentPage)


    const handleItemsPerPage = (e) => {
        const val = e.target.value;
        setItemsPerPage(val);
        setCurrentPage(1)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text)
        setCurrentPage(1);
    }

    return (
        <div className="mt-[50px]">
            <Helmet>
                <title>Services</title>
            </Helmet>
            {
                loading ? <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars w-[150px] bg-[#7f1734]"><SiDreamstime></SiDreamstime></span></div> : <div>
                    <div className="flex justify-start items-center mx-[5px] md:mx-[20px] mb-[30px]">
                        <form onSubmit={handleSearch} className="shadow-lg rounded-l-lg" action="">
                            <input name="search" placeholder="Filter By Service Name" className="p-2 outline-none" type="text" />
                            <button> <input type="submit" value="Search" className="p-2 bg-[#7f1734] text-white font-medium rounded-r-md" /></button>
                        </form>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">

                        {
                            services.map((service) => <IndividualServiceInAllService key={service._id} service={service}></IndividualServiceInAllService>)
                        }
                    </div>

                    <div className="mt-[50px] flex justify-center items-center gap-5">
                        <div className="pagination flex items-center gap-4">
                            <button disabled={currentPage == 1} onClick={() => setCurrentPage(currentPage - 1)} className={`p-2 ${currentPage === 1 && 'bg-slate-300'} text-white font-medium rounded-lg bg-[#7f1734]`}>Previous</button>
                            <div >
                                {
                                    pages.map((eachPage, idx) => <button onClick={() => handlePagination(eachPage)} className={`py-2 px-4 ${currentPage == eachPage && 'bg-[#7f1734] text-white'} rounded-md font-medium hover:bg-[#7f1734] hover:text-white`} key={idx}>{eachPage}</button>)
                                }
                            </div>
                            <button disabled={currentPage == numberOfPages} onClick={() => setCurrentPage(currentPage + 1)} className={`p-2 ${currentPage == numberOfPages && 'bg-slate-300'} text-white font-medium rounded-lg bg-[#7f1734]`}>Next</button>
                        </div>
                        <div className="p-2 rounded-lg font-medium bg-[#7f1734] border-[#7f1734]">
                            <select value={itemsPerPage} className="bg-[#7f1734] text-white outline-0" onChange={handleItemsPerPage} name="" id="">
                                <option value="6">6</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default AllServices;