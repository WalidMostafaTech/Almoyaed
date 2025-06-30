import "swiper/css";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Api from "../../_Service/Api";

const SwiperlastEvents = () => {
    const { data, loading, error } = Api();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='w-full'>
            <Swiper
                className="mySwiper w-full"
                loop={false}
              
                navigation={{
                    nextEl: '.worksSwiper-next',
                    prevEl: '.worksSwiper-prev',
                }}
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
            >
                {data && data.map((item, index) => (
                    <SwiperSlide key={index} className=''>
                        <div className='md:rounded-[8px] w-full md:w-[98%] mx-auto overflow-hidden h-[350px] md:h-[580px]'>
                            <video className='w-full h-full' controls src={item.video}>
                                المتصفح الخاص بك لا يدعم عرض الفيديو.
                            </video>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default SwiperlastEvents;
