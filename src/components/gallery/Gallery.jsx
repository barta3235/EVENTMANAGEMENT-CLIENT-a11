import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Gallery = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="ga1 w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[25px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Marketing Event at Switzerland</h1></div></div>

                <div data-aos="flip-down" data-aos-easing="linear"
                    data-aos-duration="1500" className="ga2 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[18px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Experiential Marketing Event at Virginia</h1></div></div>

                <div data-aos="flip-up" className="ga3 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[18px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Corporate conference at Grand hall, Scranton</h1></div></div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="ga4 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[25px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Live Music Show at Houston </h1></div></div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="ga5 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[19px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Wedding at Paris</h1></div></div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="ga6 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[18px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Night Live Show at High Garden</h1></div></div>

                <div data-aos="flip-down" data-aos-easing="linear"
                    data-aos-duration="1500" className="ga7 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[25px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Trade & Expo, China</h1></div></div>

                <div data-aos="flip-right" className="ga8 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[18px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Marketing Promotion Event for CLOSETMAID</h1></div></div>

                <div data-aos="flip-up" className="ga9 w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[22px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Birthday party at Juhu</h1></div></div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="ga11 w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square flex justify-center items-center text-white text-[25px]"><div className="bg-black bg-opacity-40 font-medium p-2 h-full w-full flex justify-center items-center"><h1>Luxury Wedding at Jaipur</h1></div></div>
            </div>
        </section>
    );
};

export default Gallery;