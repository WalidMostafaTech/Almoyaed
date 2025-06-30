import { useParams } from 'react-router-dom';
import BreadCrumb from '../../Components/WorkPage/BreadCrumb';
import WorkSection1 from '../../Components/WorkPage/WorkSection1';
import Headers from '../../Components/GlobalComponents/Headers';
import WorkStates from '../../Components/WorkPage/WorkStates';
import IconwhatsApp from '../../Components/GlobalComponents/IconwhatsApp';
import useApi from '../../_Service/UseApi';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import ScaleLoader from 'react-spinners/ScaleLoader';
import placeholderimage from "../../assets/placeholderimage.png"


const Work = () => {
    const { WorkId } = useParams();
    const { data, loading, error } = useApi();
    const { t } = useTranslation(); // استخدام الترجمة

    const afterImages = data?.filter(i => i.id == WorkId);
    const category = data?.find(i => i.id == WorkId)
    // console.log("data project", category?.category);

    if (loading) return (
        <>
            <div className="flex justify-center items-center h-screen">
                <ScaleLoader />
            </div>
        </>
    );
    if (error) return <p>Error: {error}</p>;

    return (
        <section className='py-10 md:container flex flex-col gap-5 mb-20'>
            <BreadCrumb projectCategory={category?.category}/>
            <WorkSection1 />
            {/* <Headers
                text={t('project_images_before')}
                span={t('before_execution')}
                des={t('project_description')}
            />
      

                <div className='flex flex-wrap gap-10 justify-center'>
                {data?.slice(0, 3)?.map((img) => (
                    <div key={img.id} className='w-[200px] overflow-hidden max-w-full'>
                        {console.log(img)}
                        {img?.before_images.length > 0 ? (
                            <img loading="lazy" className='object-cover w-full h-full' src={img.before_images} alt='img' />
                        ) : (
                            <img className="h-full" src={placeholderimage} alt='placeholder image' />
                        )}
                    </div>
                ))}
            </div> */}
            <Headers
                text={t('project_images_after')}
                span={t('after_execution')}
                des={t('project_description')}
            />

            <div className='flex flex-wrap gap-10 justify-center'>
                <div className='flex flex-wrap gap-10 justify-center'>
                    {afterImages?.[0]?.after_images.map((i, index) => (
                        <img key={index} loading="lazy" className='object-cover w-[320px] h-auto' src={afterImages?.[0]?.after_images[index]} alt='img' />

                    ))}
                </div>
            </div>
            <IconwhatsApp />
        </section>
    );
};

export default Work;

