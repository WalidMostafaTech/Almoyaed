import React from 'react'
import { assets } from '../../assets/assets'

const DescriptionImages = () => {
    return (
        <div className='relative flex justify-center items-center'>
            <div className=' w-[900px] h-[500px]'>
                <img className='w-full  h-full max-h-full max-w-full object-cover' src={assets.frame1} alt='img1' />
            </div>
            <div className='h-[700px] w-[640px] lg:w-[450px] lg:h-[620px] xl:w-[500px] xl:h-[670px] absolute inset-0 flex justify-center items-center m-auto max-w-full'>
                <img className='w-full h-full max-h-full object-cover ' src={assets.frame2} alt='img2' />
            </div>
        </div>
    )
}

export default DescriptionImages