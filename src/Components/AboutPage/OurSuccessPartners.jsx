import React from 'react';
import { useTranslation } from 'react-i18next'; 
import SwiperCompany from './SwiperCompany';

const OurSuccessPartners = () => {
    const { t } = useTranslation(); 

    return (
        <section className='my-24'>
            <h2 className='mb-20 text-center text-[25px] md:text-[30px] font-bold text-[#1A1A1A]'>
                {t('success_partners')} <span className='text-[#686465]'>{t('our_success')}</span>
            </h2>
            <SwiperCompany />
        </section>
    );
};

export default OurSuccessPartners;
