import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { t } from 'i18next';
import placeholderimage from "../../assets/placeholderimage.png"

const CardSwiperWork = ({ project }) => {
    if (!project) return null; 

    return (
        <div className='w-[80%] mx-auto lg:w-[420px] h-fit overflow-hidden px-1'>
            <div className='flex flex-col gap-4 w-full mb-4'>
                <div className='flex justify-around text-[#BBAAAB] font-medium'>
                    {/* <h4>{t('before')}</h4> */}
                    {/* Removed "after" title */}
                </div>
                <div className='flex gap-2 h-[370px] w-full rounded-[7px] overflow-hidden shadow-[0px_4px_51.4px_0px_#0000000D]'>
                    <img className='h-full w-[50%] max-w-full lg:w-[205px] object-cover' src={project.before_images[0]} alt='before' />
                    <img className="h-full w-[50%] max-w-full lg:w-[205px] object-cover" src={project.after_images[0]} alt='after' />
                </div>
                <div className="w-full flex justify-start">
                    <h2 className="text-[#686465] font-bold w-fit text-[24px] lg:text-[32px]"><div dangerouslySetInnerHTML={{ __html: name }} /></h2>
                </div>
                <div className="flex gap-3 items-center">
                    <img src={assets.iconBuild} alt="icon" />
                    <h2 className="text-[#B4B1B1] font-medium"> <div dangerouslySetInnerHTML={{ __html: location }} /></h2>
                </div>
                <div className="w-full text-[#999999] text-[13px] leading-[30px]">
                    <p className="w-full h-[87px] overflow-hidden">{project.description}</p>
                </div>
                <Link className="w-full p-[16px_72px_16px_72px] text-center border border-[#686465] rounded-[4px] text-[#686465] font-bold hover:text-white hover:bg-[#686465]" to={`/works/${id}`}> {t('Explore more')}</Link>
            </div>
        </div>
    );
};

export default CardSwiperWork;
