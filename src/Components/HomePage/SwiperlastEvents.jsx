import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Api from "../../_Service/Api";

const SwiperlastEvents = () => {
  const { data, loading, error } = Api();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="w-full">
      <Swiper
        className="mySwiper w-full"
        loop={false}
        navigation={{
          nextEl: ".worksSwiper-next",
          prevEl: ".worksSwiper-prev",
        }}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
      >
        {data &&
          data.map((item, index) => (
            <SwiperSlide key={index} className="w-full flex flex-col gap-10">
              <div className="flex flex-col text-center gap-4">
                <h3 className="text-[#000000] font-bold text-[19px] md:text-[22px]">
                  {item.title}
                </h3>
                <p className="text-[#666666] font-medium text-[13px] md:text-[17px]">
                  {item.description}
                </p>
              </div>

              <div className="md:rounded-[8px] w-full md:w-[98%] mx-auto overflow-hidden h-[350px] md:h-[580px]">
                <video className="w-full h-full" controls src={item.video}>
                  المتصفح الخاص بك لا يدعم عرض الفيديو.
                </video>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperlastEvents;
