import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import useApi from '../../_Service/UseApi';
import CardSwiperWork from "./CardSwiperWork";

const SwiperWorks = () => {
    const { data, loading, error } = useApi();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    console.log("data", data);

    return (
        <div>
            <Swiper
                className="mySwiper"
                loop={true}
                navigation={{
                    nextEl: '.worksSwiper-next',
                    prevEl: '.worksSwiper-prev',
                }}
                modules={[Navigation, Autoplay]}
                slidesPerView={5}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    720: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1224: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                }}
            >
                {data?.map(project => (
                    <SwiperSlide key={project.id}>
                        <CardSwiperWork
                            name={project.name}
                            after_images={project?.after_images}
                            before_images={project?.before_images}
                            description={project?.description}
                            id={project?.id}
                            location={project?.location}
                            key={project?.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperWorks;
