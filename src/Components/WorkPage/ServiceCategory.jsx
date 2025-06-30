import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headers from '../GlobalComponents/Headers';
import CardServices from './CardServices';
import useApi from '../../_Service/UseApi';
import { useTranslation } from 'react-i18next';

const ServiceCategory = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useApi();
    const { t } = useTranslation();
    const [serviceGategory, setServiceGategory] = useState("All");

    if (loading) return <p>{t('loading')}</p>;
    if (error) return <p>{t('error', { error: error.message })}</p>;

    const gategory = [
        { service: t('all_works'), gategory: "All" },
        { service: t('real_estate'), gategory: "التمليك العقاري" },
        { service: t('marketing_development'), gategory: "التسويق و التطوير" },
        { service: t('electric_elevators'), gategory: "مصاعد كهربائية" },
        { service: t('containers_power'), gategory: "قوي الحاويات" },
        { service: t('building_materials'), gategory: "مواد البناء" },
        { service: t('general_repairs'), gategory: "الصيانة العامة" }
    ];

    return (
        <div className='md:container'>
            <Headers
                text={t('all_projects')}
                span={t('our_works')}
                des={t('description')}
            />
            <div className='flex mb-10 gap-5 items-center justify-center flex-wrap'>
                {gategory.map((service, index) => (
                    <div key={index} onClick={() => setServiceGategory(service.gategory)} className={`${service.gategory === serviceGategory ? "activeService" : null} flex-shrink-0 border border-[#AC9899] py-2 px-7 rounded-full font-medium hover:bg-[#715B5C] hover:cursor-pointer`}>
                        <h2 className='text-[#AC9899] hover:text-[#FFFFFF] text-center'>{service.service}</h2>
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap gap-10 justify-center mb-20'>
                {data && data
                    .filter((item) => serviceGategory === "All" || item.category == serviceGategory)
                    .slice(0,6).map((item) => (
                        <CardServices
                            key={item.id}
                            ImgUrl={item.before_images}
                            text1={item.name}
                            text2=""
                            name={item.client_name}
                            linkUrl={`/works/${item.id}`}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ServiceCategory;
