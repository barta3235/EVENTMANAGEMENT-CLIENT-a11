import { useEffect, useState } from "react";
import IndividualServiceInAllService from "./IndividualServiceInAllService";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useLoaderData } from "react-router-dom";


const AllServices = () => {

    const [services, setServices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [count, setCount] = useState(0)
    const data = useLoaderData();
    console.log(data.count);

    useEffect(() => {
        setCount(data.count)
    }, [data.count])



    const numberOfPages = Math.ceil(count / itemsPerPage);
    console.log(numberOfPages);

    const pages = [...Array(numberOfPages).keys()].map(element => element + 1);


    const handlePagination = (value) => {
        console.log(value);
        setCurrentPage(value);
    }
    console.log(currentPage)


    useEffect(() => {
        axios.get(`http://localhost:5000/filteredServices?page=${currentPage}&size=${itemsPerPage}`)
            .then(data => {
                setServices(data.data);
            })
    }, [currentPage, itemsPerPage])

    const handleItemsPerPage=(e)=>{
        const val= e.target.value;
        setItemsPerPage(val);
        setCurrentPage(1)
    }

    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
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
                        <option value="">All</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default AllServices;