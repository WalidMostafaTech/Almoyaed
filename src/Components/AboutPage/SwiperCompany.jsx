import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "swiper/css";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const SwiperCompany = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const lang = 'ar';

    useEffect(() => {
        axios.get('https://dashboard.almoyaedgroup.com/api/Admin/Partners', {
            headers: {
                'lang': `${lang}`,
            },
        })
            .then(response => {
                setPartners(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch partners');
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
                spaceBetween={15}
                breakpoints={{
                    300: {
                        slidesPerView: 4,
                    },
                    1224: {
                        slidesPerView: 6,
                    },
                }}
            >
                {partners.map(partner => (
                    <SwiperSlide key={partner.id}>
                        <div>
                            <a href={partner.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    width={120}
                                    height={200}
                                    src={partner.logo}
                                    alt={partner.name || "Partner logo"}
                                />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperCompany;
