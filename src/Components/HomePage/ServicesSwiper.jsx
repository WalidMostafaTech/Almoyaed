import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { assets } from '../../assets/assets';
import Headers from '../GlobalComponents/Headers';
import useApi from '../../_Service/UseApi';


// const slidesData = [
//     {
//         title: ' التمليك',
//         subtitle: 'العقاري',
//         imageSrc: assets.service1,
//         imageAlt: 'icon',
//     },
//     {
//         title: 'التسويق و ',
//         subtitle: 'التطوير',
//         imageSrc: assets.service2,
//         imageAlt: 'icon',
//     },
//     {
//         title: 'مصاعد  ',
//         subtitle: 'كهربائية',
//         imageSrc: assets.service3,
//         imageAlt: 'icon',
//     },
//     {
//         title: 'قوي ',
//         subtitle: 'الحاويات',
//         imageSrc: assets.service4,
//         imageAlt: 'icon',
//     },
//     {
//         title: 'مواد  ',
//         subtitle: 'البناء',
//         imageSrc: assets.service5,
//         imageAlt: 'icon',
//     },
//     {
//         title: 'الصيانة ',
//         subtitle: 'العامة',
//         imageSrc: assets.service6,
//         imageAlt: 'icon',
//     },
// ];

const ServicesSwiper = ({ headerText, HeaderSpan }) => {
    const { data, loading, error } = useApi(); 

    if (loading) return <p>Loading...</p>; 
    if (error) return <p>Error: {error}</p>;
    return (
        <div className='md:container mb-20 px-5 md:px-0'>
            <div className='mb-14'>
                <Headers
                    text={headerText}
                    span={HeaderSpan}
                    des={"شركاؤك في تحقيق النجاح العقاري من خلال استراتيجيات تسويقية فعّالة تصل بمشروعاتك إلى العملاء المستهدفين بكل احترافية"}
                />
            </div>
            <div>
                <div className='w-full'>
                    <Swiper
                        className="mySwiper"
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        navigation={false}
                        modules={[Navigation, Autoplay]}
                        slidesPerView={5}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 100,
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {data.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-fit cursor-pointer'>
                                    <h2 className='text-center font-semibold'>
                                        {slide.title} <span className='text-[#715B5C]'>{slide.subtitle}</span>
                                    </h2>
                                    <div className='mt-4 bg-[#F9E2D280] w-[180px] h-[140px] p-5 flex items-center justify-center shadow-[0px_4px_51.4px_0px_#0000000D] rounded-[8px] hover:bg-[#ECA979]'>
                                        {/* Replaced Next.js Image with standard img tag */}
                                        <img
                                            width={75}
                                            height={75}
                                            src={slide.image}
                                            alt={slide.image}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ServicesSwiper;
