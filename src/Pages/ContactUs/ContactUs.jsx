import Headers from '../../Components/GlobalComponents/Headers';
import IconwhatsApp from '../../Components/GlobalComponents/IconwhatsApp';
import ContactUsForm from '../../Components/ContactUsPage/ContactUsForm';
import Map from '../../Components/ContactUsPage/Map';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { t } = useTranslation();


    return (
        <section className='px-2 md:container'>
            <Headers
                text={t('contact_us')}
                span={t('now')}
            // des={t('descriptionn')}
            />
            <div className='flex items-start w-full my-24 flex-col-reverse lg:flex-row flex-wrap '>
                <div className='w-full lg:w-[50%] mx-auto mt-10 lg:mt-0'>
                    <ContactUsForm />
                </div>
                <div className='w-full lg:w-[50%] mx-auto'>
                    <Map />
                </div>
            </div>
            <IconwhatsApp />
        </section>
    );
}

export default ContactUs;
