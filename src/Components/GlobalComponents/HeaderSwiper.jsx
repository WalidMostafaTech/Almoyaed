import { ChevronLeft, ChevronRight } from 'lucide-react';
import i18n from '../../i18n';

const HeaderSwiper = ({ text1, text2 }) => {
    const lang = i18n.language

    return (
        <div className='flex items-center justify-between'>
            <div className="w-full text-center md:text-start">
                <h2 className='text-[#333333] font-bold text-[25px] md:text-[30px]'>
                    {text1} <span className='text-[#686465]'>{text2}</span>
                </h2>
            </div>
            <div className={`md:flex gap-5 text-[#AC9899] hidden ${lang == "en" ? "flex-row-reverse" : ''}`}>
                <div className='worksSwiper-prev cursor-pointer shadow-[0px_5px_49.13px_0px_#0000001A] bg-[#FFFFFF47] w-[60px] h-[60px] rounded-full flex items-center justify-center'>
                    <ChevronRight size={30} />
                </div>
                <div className='worksSwiper-next cursor-pointer shadow-[0px_5px_49.13px_0px_#0000001A] text-white bg-[#AC9899] w-[60px] h-[60px] rounded-full flex items-center justify-center'>
                    <ChevronLeft size={30} />
                </div>
            </div>
        </div>
    );
};

export default HeaderSwiper;
