import HeaderSwiper from '../GlobalComponents/HeaderSwiper';
import SwiperlastEvents from './SwiperlastEvents';
import Api from '../../_Service/Api';  
import { t } from 'i18next';

const LastEvents = () => {
    const { data, loading, error } = Api();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>
    return (
        <div className='my-[70px] md:my-[120px] flex flex-col gap-12'>
            <div className='md:container px-3 md:px-0'>
            <HeaderSwiper text1={t("last_events")} text2={t("activities")} />
            </div>
            <div className='w-full flex flex-col gap-10'>
                <div className='flex flex-col text-center gap-4'>
                    <h3 className='text-[#000000] font-bold text-[19px] md:text-[22px]'> {data && data[0]?.title}</h3>
                    <p className='text-[#666666] font-medium text-[13px] md:text-[17px]'> {data && data[0]?.description}</p>
                </div>
                <div>
                    <SwiperlastEvents /> 
                </div>
            </div>
        </div>
    );
}

export default LastEvents;
