import { useParams } from 'react-router-dom';
import Buttons from '../GlobalComponents/Buttons';
import { assets } from '../../assets/assets';
import useApi from '../../_Service/UseApi';
import { useTranslation } from 'react-i18next';

const WorkSection1 = () => {
    const { WorkId } = useParams(); 
    const { data, loading, error } = useApi(); 
    const { t } = useTranslation(); 

    

    if (loading) return <p>{t('loading')}</p>;
    if (error) return <p>{t('error', { error: error.message })}</p>;

    if (!data || data.length === 0) {
        return <p>{t('no_data_available')}</p>; 
    }

    const projectData = data.find(item => item.id === parseInt(WorkId)); 
    const coverImage = projectData?.after_images[0]
    if (!projectData) return <p>{t('no_project_found')}</p>; 
    return (
        <div className='mt-14 flex flex-col-reverse md:flex-row flex-wrap h-fit gap-5 md:gap-0'>
            <div className='flex flex-col gap-5 w-full md:w-[50%] items-center md:items-start'>
                <h2 className='text-[#686465] font-bold text-[20px] md:text-[25px]'>{projectData.name}</h2>
                <div className='flex flex-col gap-5 items-center text-center md:items-start md:text-start'>
                    <div className='flex gap-10'>
                        <div className='flex items-center gap-1'>
                            <p className='text-[#686465] font-medium text-sm md:text-base'>{projectData.name}</p>
                        </div>
                        <div className='flex items-center gap-1 text-sm md:text-base'>
                            {/* <p className='text-[#B3B3B3] font-medium'>{t('client_name')} </p> */}
                            {/* <p className='text-[#686465] font-bold'>{projectData.client_name}</p> */}
                        </div>
                    </div>
                    <h3 className='text-[#000000] font-semibold text-[20px]'>{t('project_ddescription')}</h3>
                    <p className='text-[#999999] font-medium leading-8 w-[95%]' dangerouslySetInnerHTML={{ __html: projectData.description }}></p>
                    <h3 className='text-[#000000] font-semibold text-[20px]'>{t('project_duration')}</h3>
                    <p className='text-[#999999] font-medium leading-8'>{projectData.project_duration}</p>
                    <div className='mt-5 md:mt-10'>
                        <Buttons text={t('contact_us')} href={"/contact-us"} />
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[50%]'>
                <div className='w-full md:w-[500px] md:rounded-[5px] overflow-hidden mx-auto h-[600px] md:h-full lg:h-[600px] max-w-full'>
                    <img className='w-full h-full object-cover' src={coverImage || assets.placeholderImage} alt='img' />
                </div>
            </div>
        </div>
    );
}

export default WorkSection1;
