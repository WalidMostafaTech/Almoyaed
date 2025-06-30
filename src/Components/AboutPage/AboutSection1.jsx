import Buttons from "../GlobalComponents/Buttons"
import WepSerivceApi from "../../_Service/Setting"
import { t } from "i18next"
import ScaleLoader from "react-spinners/ScaleLoader"
const AboutSection1 = () => {
    const { data, loading, error } = WepSerivceApi()
    if (loading) return (
        <>
            <div className="flex justify-center items-center h-screen">
                <ScaleLoader />
            </div>
        </>
    );

    if (error) return <p>error.....</p>
    return (
        <section className='relative py-5 pb-14 md:pb-0 md:py-20 px-5 sm:mb-15 mb-48 h-full'>
            <div className='z-10 flex flex-col lg:flex-row md:container px-0 items-center h-fit'>
                <div className='w-full lg:w-[70%] flex flex-col gap-5 mt-10 md:-mt-10'>
                    <h2 className='text-[#2D1606] text-[20px] md:text-[30px] font-bold '>{data.about_us.title.slice(0, 16)}<span className='text-[#686465]'> {data.about_us.title.slice(16,)}</span></h2>
                    <p className='text-[#4D4D4D] font-medium max-w-full lg:max-w-[80%] leading-8 lg:leading-10 text-[16px]'>{data.about_us.description}</p>
                    <div className='mt-10'>
                        <Buttons text={t('book_consultation_now')} href={'/contact-us'} />
                    </div>
                </div>
                <div className='z-10 hidden md:relative right-0 md:block md:w-[100%] lg:w-[60%] -mt-10'>
                    <img loading="lazy" className='w-full h-full' src={data.about_us.image} alt='img' />
                </div>
            </div>
            {/* <div dir='ltr' className='relative lg:w-[70%] xl:w-[60%] lg:absolute top-0 left-0 py-24'>
                <img className='' src={assets.bg} alt='img' />
                <div className='lg:hidden absolute inset-0 z-10 w-[50%] -mt-10'>
                    <img className='w-full h-full' src={assets.person} alt='img' />
                </div>
            </div> */}

        </section>
    )
}

export default AboutSection1