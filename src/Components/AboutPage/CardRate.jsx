import React from 'react';

const CardRate = ({ testimonial }) => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden'>
                    <img
                        width={50}
                        height={50}
                        src={testimonial.image}
                        alt='avatar'
                    />
                </div>
                <h2 className='text-[#B35919] font-bold'>{testimonial.name}</h2>
            </div>
            <div className='flex-shrink-0'>
                <p className='text-[#333333] font-semibold flex-shrink-0'>“{testimonial.content}”</p>
            </div>
        </div>
    );
}

export default CardRate;
