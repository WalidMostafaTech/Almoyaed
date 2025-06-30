import React from 'react';
import { useTranslation } from 'react-i18next'; 
import { assets } from '../../assets/assets';

const AboutSection3 = () => {
    const { t } = useTranslation(); 

    return (
        <section className='md:container my-28'>
            <div className='grid grid-cols-1 w-full lg:grid-cols-2 place-items-center gap-10'>
                <div>
                    <div className='flex h-[250px] overflow-hidden items-center  gap-5 custom-gradient-border'>
                        <div>
                            <img className='w-full h-full object-cover' src={assets.photo} alt='img' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-[#5A2D0C] font-bold'>
                                <span className='text-[#696564]'>{t('clients_count')}</span>
                            </h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-5 mt-5 '>
                        <div className='border border-black rounded-[15px] w-[50%] h-[80px] text-center content-center gradient-border'>
                            <h2 className='text-[#000000] font-bold text-[15px] md:text-[20px]'>
                                <span className='text-[#696564]'>{t('successful_projects')}</span>
                            </h2>
                        </div>
                        <div className='border border-black rounded-[15px] w-[50%] h-[80px] text-center content-center gradient-border'>
                            <h2 className='text-[#000000] font-bold text-[15px] md:text-[20px]'>
                                <span className='text-[#696564]'>{t('years_experience')}</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-7 text-center md:text-start px-5'>
                    <h2 className='text-[#333333] font-bold leading-7 md:leading-10 text-[17px] md:text-[20px]'>
                        {t('commitment')}
                    </h2>
                    <p className='leading-8 text-[#666666] font-semibold'>
                        {t('missionn')}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection3;
