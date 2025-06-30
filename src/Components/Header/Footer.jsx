import { Mail, MapPinHouse, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import WepSerivceApi from '../../_Service/Setting';
import { useTranslation } from 'react-i18next';
import failBackLogo from "/logofooter.png"

const Footer = () => {
    const { t } = useTranslation();
    const { data, loading, error } = WepSerivceApi();
    const dataFooter = data?.team

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className='bg-[#686564]'>
            <div className='px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 p-5'>
                <div className='flex flex-col mt-10 gap-8 items-center md:items-start text-[#E6F5FF]'>

                    {dataFooter?.footer ? <img loading='lazy' className="w-full h-full" src={dataFooter?.footer} alt="logo" />
                        :
                        <img loading='lazy' className="w-full h-full" src={failBackLogo} alt="logo" />}
                    <h2 className='text-[#CCCCCC] font-bold text-[22px] text-center md:text-left'>{dataFooter?.title}</h2>
                    <h3 className='font-semibold leading-[32px] text-center md:text-start'>
                        {dataFooter?.description}
                    </h3>
                </div>
                <div className='flex mt-10 flex-col gap-6 items-center md:items-start text-center md:text-start'>
                    <div className='mx-auto flex flex-col mt-2 gap-6'>
                        <h2 className='text-[#CCCCCC] font-bold text-[22px]'>{t('site_sections')}</h2>
                        <ul className='flex flex-col gap-5 text-[#E6F5FF] text-[16px] cursor-pointer font-light tracking-wider'>
                            <Link to={'/'} className={""}>{t('home')}</Link>
                            <Link to={'/about-us'} className={""}>{t('about')}</Link>
                            <Link to={'/services'} className={""}>{t('services')}</Link>
                            <Link to={'/works'} className={""}>{t('works')}</Link>
                            <Link to={'/privacy-policy'} className={""}>{t('privicy')}</Link>
                            <Link to={'/terms'} className={""}>{t('terms')}</Link>
                        </ul>
                    </div>
                </div>
                <div className='text-[#FFFFFF] mt-10 flex flex-col gap-7 item-center md:items-start text-center md:text-start'>
                    <h2 className='text-[#CCCCCC] mt-2 mb-0 md:mb-4 text-[18px] font-bold'>{t('phone')}</h2>
                    <div className='flex justify-center items-center gap-2'>
                        <Phone size={20} className='hidden md:block' />
                        <a href={`https://wa.me/${data.social.whatsapp}`} >
                            {data.contact_us.mobile}
                        </a>
                        {/* <Link to={""} target="_blank" rel="noopener noreferrer">{data.contact_us.mobile}</Link> */}
                    </div>
                    <h2 className='text-[18px] text-[#CCCCCC] font-bold'>{t('address')}</h2>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='mt-2'>
                            <MapPinHouse className='w-[30px] hidden md:block' />
                        </div>
                        <p>{data.contact_us.address}</p>
                    </div>
                    <h2 className='text-[18px] text-[#CCCCCC] font-bold'>{t('email')}</h2>
                    <div className='flex justify-center items-center gap-2 '>
                        <Mail size={20} className='hidden md:block' />
                        <Link className='underline' to={``}>{data.contact_us.email}</Link>
                    </div>
                </div>
            </div>
            <div className='text-center flex flex-col py-5'>
                <div className='flex justify-center cursor-pointer items-center gap-5'>
                    <Link to={data.social.X} target='_blank'>
                        <img src={assets.social1} alt='icon' className='w-8 h-8' />
                    </Link>
                    <Link to={data.social.facebook} target='_blank'>
                        <img src={assets.social2} alt='icon' className='w-8 h-8' />
                    </Link>
                    <Link to={data.social.linkedin} target='_blank'>
                        <img src={assets.social3} alt='icon' className='w-8 h-8' />
                    </Link>
                    <Link to={data.social.instagram} target='_blank'>
                        <img src={assets.social4} alt='icon' className='w-8 h-8' />
                    </Link>
                    <a href={`https://wa.me/${data.social.whatsapp}`} target='_blank'>
                        <img src={assets.social5} alt='icon' className='w-8 h-8' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer;
