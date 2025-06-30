import { t } from 'i18next'
import React from 'react'

const BlogCard = ({img, title, des, date}) => {

    const shortDec = des.slice(0, 33)
  return (
    <div>
        <img src={img} loading='lazy' className='rounded rounded-b-none w-[100%] h-[300px] w-max-[400px] h-max[400px]'/>
        <div className='px-3 pb-5'>
          <h3 className='font-bold mt-5'>{title}</h3>
          <p className='text-[#4E4E4E]' dangerouslySetInnerHTML={{ __html: shortDec }}/>
          <p className='text-[#fff] py-3 w-[50%] mx-auto text-sm text-center mt-10 bg-[#686465]'>{t('readMore')}</p>
        </div>
    </div>
  )
}

export default BlogCard