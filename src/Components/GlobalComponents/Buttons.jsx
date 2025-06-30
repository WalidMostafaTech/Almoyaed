import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({ text, href }) => {
    return (
        <div>
            <Link to={`${href}`} className='p-[12px_55px_12px_55px] text-center bg-[#686465] hover:bg-[#B4B1B1] rounded-[4px] text-xs md:text-base  text-white font-bold'>
                {text}
            </Link>
        </div>
    )
}

export default Buttons