import React from 'react';
import Buttons from '../GlobalComponents/Buttons';
import { useTranslation } from 'react-i18next';

const ServiceDescription = ({ service }) => {
    const { t } = useTranslation();

    if (!service) return <p>No Service</p>;
    console.log(service);

    return (
        <div className='mt-32 text-center flex flex-col gap-10'>
            <h2 className='text-[#000000] font-bold text-[25px] md:text-[28px]'>
                {t('service_title_part1')} <span className='text-[#686465]'>
                    {service.name}
                </span>
                {/* {t('service_title_part2')} */}
            </h2>
            <div className='flex flex-col gap-10 mb-10'>
                <div className='w-full mx-auto h-[300px] md:h-[500px] overflow-hidden rounded-[4px]'>
                    <img className='w-full h-full object-cover' src={service.thumbnail} alt='img' />
                </div>
                <div className='flex text-start gap-3 px-4 md:px-0'>
                    <h2 className='flex-shrink-0 text-[#000000] font-semibold'>{t('des')}</h2>
                    <p className='text-[#666666] font-medium leading-7' 
                    dangerouslySetInnerHTML={{ __html: service.description }} 
                    />
                </div>
                <div className='flex text-start gap-3 px-4 md:px-0'>
                    <h2 className='flex-shrink-0 text-[#000000] font-semibold w-[120px]'>{t('results')} :</h2>
                    <p className='text-[#666666] font-medium leading-7'>{service.contact}</p>
                </div>
                <div className='mt-5'>
                    <Buttons href={"/contact-us"} text={t('request_service')} />
                </div>
            </div>
        </div>
    );
};

export default ServiceDescription;
