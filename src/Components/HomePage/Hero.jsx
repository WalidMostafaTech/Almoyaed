import ScaleLoader from 'react-spinners/ScaleLoader';
import WepSerivceApi from '../../_Service/Setting';

const Hero = () => {
    const { data, loading } = WepSerivceApi()
    if (loading) return (
        <>
            <div className="flex justify-center items-center h-screen">
                <ScaleLoader />
            </div>
        </>
    );
    return (
        <section>
            <div className='w-full h-fit'>
                <div className='w-full h-screen-minus-nav relative'> {/* Made this relative */}
                    <div className='w-full h-full flex items-center justify-center'>
                        <img loading="lazy" className='w-full h-[60vh] md:h-[89vh] object-cover' src={data?.home_bannar.image} alt='heroImage' />
                        {/* Overlay */}
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div> {/* Black overlay */}
                        <div className='absolute top-[23%] text-center text-[#FFFFFF] z-10'> {/* Ensure text is above overlay */}
                            <h2 className='text-[25px] md:text-[48px] font-bold mb-8'>
                                {data?.home_bannar.mainTitle}
                            </h2>
                            <p className='text-[14px] md:text-[24px] leading-[40px] md:leading-loose w-[90%] mx-auto font-medium'>
                                {data?.home_bannar.homeDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;
