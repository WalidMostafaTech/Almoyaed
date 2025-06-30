import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useApi from '../../_Service/UseApi';
import ScaleLoader from 'react-spinners/ScaleLoader';

const ServiceSection1 = () => {
    const { data, loading, error } = useApi();

    if (loading) return (
        <>
            <div className="flex justify-center items-center h-screen">
                <ScaleLoader />
            </div>
        </>
    );
    if (error) return <p>Error: {error}</p>;

    return (
        <section className='md:container grid grid-cols-1 lg:grid-cols-2 my-20 gap-10'>

            <div className='mt-5 flex flex-col gap-10 text-center md:text-start px-2 md:px-0'>
                {data.slice(0, 1)?.map((project, index) => (
                    <div className='flex flex-col gap-10 ' key={index}>
                        <h2 className=' font-bold text-[26px] md:text-[30px]'>
                            {project.name} <span className='text-[#686465]'> {project.name} </span>
                        </h2>
                        <p className='leading-8 text-[#666666] font-semibold'
                            dangerouslySetInnerHTML={{ __html: project.description }}>
                        </p>
                    </div>
                ))}
            </div>

            <div className='w-full h-[350px] md:h-[470px] rounded-md overflow-hidden'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                >
                    {data?.slice(0,1).map((project, index) => (
                        <SwiperSlide key={index}>
                            <img className='w-full h-[350px] md:h-full object-cover' src={project?.before_images[0]} alt={`Project Image`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ServiceSection1;
