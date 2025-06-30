import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Headers from '../GlobalComponents/Headers';
import ServiceApi from '../../_Service/ServiceApi';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import placeholderimage from "../../assets/placeholderimage.png"
import { useSelectedService } from '../../context/SelectedServiceContext';



const ServicesSwiper = ({ headerText, HeaderSpan }) => {

    const { selectedService, setSelectedService } = useSelectedService(); 

    const { data, loading, error } = ServiceApi();
    const route = useNavigate();

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <ScaleLoader />
        </div>
    );
    
    if (error) return <p>حدث خطأ: {error.message}</p>;


    return (
        <div className='md:container mb-20 px-5 md:px-0'>
            <div className='mb-14 '>
                <Headers
                    text={headerText}
                    span={HeaderSpan}
                    des={t('services_description')}
                />
            </div>
            <div>
                <div className='w-full'>
                    <Swiper
                        className="mySwiper"
                        navigation={false}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 70,
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1046: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1294: {
                                slidesPerView: 6,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {data.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className='w-fit cursor-pointer'
                                    onClick={() => setSelectedService(slide)}
                                >
                                    <h2 className='text-center font-semibold'>
                                        { } <span className='text-[#686465]'>{slide.name}</span>
                                    </h2>
                                    {/*  
                                     bg-[#F0F0F0]
                                     shadow-[0px_4px_51.4px_0px_#0000000D]
                                    */}
                                    <div className='mt-4 w-[180px] h-[140px] p-1 flex items-center justify-center  rounded-[8px] hover:bg-[#CDCBCB]'>

                                        {

                                            slide.image.length > 0 ?
                                                <img
                                                    src={slide.image}
                                                    alt={slide.name}
                                                    className="object-cover"
                                                    onClick={() => route("/services")}
                                                />
                                                : <img className="object-cover" src={placeholderimage} alt='placeholder image' />
                                        }

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ServicesSwiper;
