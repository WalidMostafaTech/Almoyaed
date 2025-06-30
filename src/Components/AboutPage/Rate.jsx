import React from 'react';
import { useTranslation } from 'react-i18next'; 
import SwiperRate from './SwiperRate';

const Rate = () => {
    const { t } = useTranslation(); 

    return (
        <div className='my-24 w-full'>
            <h2 className='mb-20 font-bold text-[25px] md:text-[30px] text-center text-[#1A1A1A]'>
                {t('what_clients_say')} <span className='text-[#686465]'>{t('about_us')}</span>
            </h2>
            <div className='pr-10 md:pr-20'>
                <SwiperRate />
            </div>
        </div>
    );
};

export default Rate;
