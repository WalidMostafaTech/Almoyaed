import { t } from 'i18next';
import { ArrowUpLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import placeholderimage from "../../assets/placeholderimage.png"


const CardServices = ({ ImgUrl, text1, text2, name, linkUrl }) => {
    return (
        <Link to={linkUrl} className='relative flex flex-col gap-5 group'>
            {/* Image container */}
            <div className='w-[320px] h-[400px] relative'>
               
{
    ImgUrl.length > 0 ? 
  <img className='object-cover h-full w-full rounded-[5px]' src={ImgUrl} alt='img' />
    :  <img className="object-cover h-full w-full rounded-[5px]" src={placeholderimage} alt='placeholder image' />
}
                {/* Dark overlay */}
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-[5px]'>
                    <div className='absolute inset-0 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <p className='text-white text-lg font-bold'>
                            انتقال
                        </p>
                        <ArrowUpLeft />
                    </div>
                </div>
            </div>

            {/* Content below the image */}
            <div className='flex flex-col gap-2'>
                <h2 className='text-[#1C1717] font-bold'>
                    {text1} <span className='text-[#715B5C]'>{text2}</span>
                </h2>
                <div className='flex gap-2 items-center font-bold'>
                    <p className='text-[#1C1717]'>{t("client_name")} :</p>
                    <p className='text-[#B35919]'>{name}</p>
                </div>
            </div>
        </Link>
    );
}

export default CardServices;
