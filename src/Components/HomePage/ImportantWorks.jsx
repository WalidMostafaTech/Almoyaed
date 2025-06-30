import React from 'react';
import HeaderSwiper from '../GlobalComponents/HeaderSwiper';
import SwiperWorks from './SwiperWorks';
import { useTranslation } from 'react-i18next';

const ImportantWorks = () => {
    const { t } = useTranslation();

    return (
        <div className='md:container mb-[150px] '>
            <div className='mb-12 '>
                <HeaderSwiper text1={t("important_works_header_1")} text2={t("important_works_header_2")} />
            </div>
            <div className="">
                <SwiperWorks />
            </div>
        </div>
    );
}

export default ImportantWorks;
