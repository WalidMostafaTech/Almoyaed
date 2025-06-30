import AboutSection1 from '../../Components/AboutPage/AboutSection1'
import DescriptionCompany from '../../Components/HomePage/DescriptionCompany'
import AboutSection2 from '../../Components/AboutPage/AboutSection2'
import OurSuccessPartners from '../../Components/AboutPage/OurSuccessPartners'
import Rate from '../../Components/AboutPage/Rate'
import AboutSection3 from '../../Components/AboutPage/AboutSection3'
import IconwhatsApp from '../../Components/GlobalComponents/IconwhatsApp'


const About = () => {

    return (
        <>
            <AboutSection1 />
            <div className='mt-20 md:mt-10 mb-20 lg:mb-44'>
                <DescriptionCompany dir='lg:order-last' buttonstate={"hidden"} />
            </div>
            <AboutSection2 />
            <OurSuccessPartners />
            <Rate />
            <AboutSection3 />
            <IconwhatsApp />
        </>
    )
}

export default About