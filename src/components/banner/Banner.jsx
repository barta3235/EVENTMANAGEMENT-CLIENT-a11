import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { EffectCreative } from 'swiper/modules';

const Banner = () => {
    return (
       <div>
         <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
        >
            <SwiperSlide className='b0'><div className='flex items-center gap-2 font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-l-full'><h1>Live Music Events | Swipe left</h1><FaArrowRightLong className='text-2xl'></FaArrowRightLong></div></SwiperSlide>
            <SwiperSlide className='b1'><div className='flex items-center gap-2 font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-l-full hover:bg-[#7f1734] hover:opacity-70'><h1>Birthdays</h1><FaArrowRightLong className='text-2xl'></FaArrowRightLong></div></SwiperSlide>
            <SwiperSlide className='b2'><div className='flex items-center gap-2 font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-l-full hover:bg-[#7f1734] hover:opacity-70'><h1>Experiential Marketing Events</h1><FaArrowRightLong className='text-2xl'></FaArrowRightLong></div></SwiperSlide>
            <SwiperSlide className='b3'><div className='flex items-center gap-2 font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-l-full hover:bg-[#7f1734] hover:opacity-70'><h1>Weddings</h1><FaArrowRightLong className='text-2xl'></FaArrowRightLong></div></SwiperSlide>
            <SwiperSlide className='b4'><div className='flex items-center gap-2 font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-l-full hover:bg-[#7f1734] hover:opacity-70'><h1>Trade Shows and Expos</h1><FaArrowRightLong className='text-2xl'></FaArrowRightLong></div></SwiperSlide>
            <SwiperSlide className='b5'><div className='flex items-center gap-2 font-bold text-white bg-gray-700 bg-opacity-50 text-[17px] md:text-[25px] p-1 md:p-3 rounded-l-full hover:bg-[#7f1734] hover:opacity-70'><h1>Corporate Conferences</h1></div></SwiperSlide>
        </Swiper>
       </div>
    );
};

export default Banner;