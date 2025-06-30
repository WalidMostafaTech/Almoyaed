import React from 'react'

const Headers = ({ text, span, des }) => {
    return (
        <div>
            <div className='w-full text-center max-w-full mt-12 mb-9 px-1 md:px-0'>
                <h2 className='text-[#333333] font-bold text-[28px]'>   {text}
                    <span className='text-[#686465]'>   {span}</span></h2>
                <h3 className='text-[#666666] font-medium mt-5 text-[15px] leading-8'>{des}</h3>
            </div>
        </div>
    )
}

export default Headers