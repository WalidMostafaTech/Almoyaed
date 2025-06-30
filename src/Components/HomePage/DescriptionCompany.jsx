import React from 'react'
import DescriptionContent from './DescriptionContent'
import DescriptionImages from './DescriptionImages'


const DescriptionCompany = ({ buttonstate, dir = "lg:order-first" }) => {
   
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 lg:pt-10'>
                <div className={`'w-full order-last ${dir} text-center md:text-start'`}>
                    <DescriptionContent buttonstate={buttonstate} />
                </div>
                <div className='w-full mb-[100px] lg:mb-0'>
                    <DescriptionImages />
                </div>
            </div>
        </>
    )
}

export default DescriptionCompany