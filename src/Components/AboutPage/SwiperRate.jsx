import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "swiper/css";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import CardRate from './CardRate';

const SwiperRate = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const lang = 'ar'; // تأكد من تعريف اللغة
    console.log(testimonials);

    useEffect(() => {
        // Fetch testimonials data
        axios.get('https://dashboard.almoyaedgroup.com/api/testimonial', {
            headers: {
                'lang': `${lang}`,
            },
        })
            .then(response => {
                setTestimonials(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch testimonials');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Swiper
                className="mySwiper"
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.worksSwiper-next',
                    prevEl: '.worksSwiper-prev',
                }}
                modules={[Navigation, Autoplay]}
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1224: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
            >
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id}>
                        <CardRate testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperRate;
