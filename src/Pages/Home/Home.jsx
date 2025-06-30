import Hero from '../../Components/HomePage/Hero'
import ImportantWorks from '../../Components/HomePage/ImportantWorks'
import DescriptionCompany from '../../Components/HomePage/DescriptionCompany'
import LastEvents from '../../Components/HomePage/LastEvents'
import Apppage from '../../Components/HomePage/Apppage'
import IconwhatsApp from '../../Components/GlobalComponents/IconwhatsApp'
import ServicesSwiper from '../../Components/ServicePage/ServicesSwiper'
import { t } from 'i18next'
const Home = () => {

    return (
        <>
            <Hero />
            <ServicesSwiper headerText={t('services_header')} HeaderSpan={t('services_span')}
            />
            <ImportantWorks />
            <DescriptionCompany />
            <LastEvents />
            <Apppage />
            <IconwhatsApp />
        </>
    )
}
export default Home