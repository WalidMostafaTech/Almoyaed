import React from 'react'
import Buttons from '../GlobalComponents/Buttons'
import { assets } from '../../assets/assets'
import WepSerivceApi from '../../_Service/Setting'
import { t } from 'i18next'
const DescriptionContent = ({ buttonstate }) => {
    const{data,loading,error} =WepSerivceApi()
    if (loading)return<p>loading.....</p>;
    
    if(error)return<p>error.....</p>;
    return (
        <div className='flex flex-col gap-7 items-start px-5 md:pr-[50px] 2xl:pr-[100px]'>
            <h2 className='font-bold text-[#1A1A1A] text-[20px] md:text-[30px] w-full text-center md:text-start'>{data.home_bannar.mainTitle.slice(0,12)}<span className='text-[#686465]'>{data.home_bannar.mainTitle.slice(12,)}</span></h2>
            <p className='text-[#666666] font-medium  leading-[28px] md:leading-[38px] w-[96%] text-[14px] items-center md:text-start md:text-[18px]'> {data.home_bannar.homeDescription}</p>
            <div className='mt-3 flex flex-col items-center md:items-start gap-[18px] w-full'>
                <div className='flex items-center text-start gap-3'>
                    <img width={38} height={38} src={assets.icon1} alt='icon' />
                    <h2 className='text-[#5A2D0C] font-semibold text-[19px] flex-shrink-0'>{t('goal')} :</h2>
                    <p className='text-[#666666] font-medium text-xs md:text-sm '>{data.home_bannar.iconTitle1}</p>
                </div>
                <div className='flex items-center text-start gap-3'>
                    <img width={38} height={38} src={assets.icon1} alt='icon' />         
                    <h2 className='text-[#5A2D0C] font-semibold flex-shrink-0 text-[19px]'>{t('vision')}:</h2>
                    <p className='text-[#666666] font-medium text-xs  md:text-sm 2xl:font-medium '>    {data.home_bannar.iconTitle2}</p>
                </div>
                <div className='flex items-center text-start gap-3'>
                    <img width={38} height={38} src={assets.icon1} alt='icon' />
                    <h2 className='text-[#5A2D0C] font-semibold flex-shrink-0 text-[19px]'>{t('mission')}:</h2>
                    <p className='text-[#666666] font-medium text-xs  md:text-sm 2xl:font-medium '>{data.home_bannar.iconTitle3}  </p>
                </div>
                <div className={`${buttonstate} mt-12`}>
                    <Buttons text={t('learn_more')} href={"/about-us"} />
                </div>
            </div>
        </div>
    )
}

export default DescriptionContent