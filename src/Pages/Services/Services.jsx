import React, { useEffect, useState } from 'react'
import Service1 from '../../Components/ServicePage/Service1'
import ServiceDescription from '../../Components/ServicePage/ServiceDescription'
import ServicesSwiper from '../../Components/ServicePage/ServicesSwiper'
import IconwhatsApp from '../../Components/GlobalComponents/IconwhatsApp'
import { t } from 'i18next'
import ServiceApi from '../../_Service/ServiceApi'
import { useSelectedService } from '../../context/SelectedServiceContext'

const Services = () => {
    const { data } = ServiceApi()
    const { selectedService, setSelectedService } = useSelectedService();

    useEffect(() => {
        if (!selectedService && data && Array.isArray(data) && data.length > 0) {
            console.log("Setting selected service to first item in data:", data[0]);
            setSelectedService(data[0]);
        } else {
            console.log("Selected service is already set or data is unavailable.");
        }
    }, [data, selectedService, setSelectedService]);


    return (
        <section className='md:container mt-10 mb-28'>
            <Service1 />
            <ServiceDescription service={selectedService} />
            <div className='mt-20'>
                <ServicesSwiper
                    headerText={t('service')}
                    HeaderSpan={t('other')}
                // onServiceSelect={(service) => setSelectedService(service)}
                />
            </div>
            <IconwhatsApp />
        </section>
    )
}

export default Services