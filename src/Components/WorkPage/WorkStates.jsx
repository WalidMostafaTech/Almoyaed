import placeholderimage from "../../assets/placeholderimage.png"
const WorkStates = ({ imgSrc }) => {
    return (
        <section className='flex flex-row'>
            <div className='w-[400px] h-[400px] rounded-[5px] overflow-hidden'>
                <img loading="lazy" className=' h-full' src={imgSrc} alt='img' />
                {

                    imgSrc.length > 0 ?
                        <img loading="lazy" className=' h-full' src={imgSrc} alt='img' />
                        : <img className="h-full" src={placeholderimage} alt='placeholder image' />
                }
            </div>
        </section>
    );
};

export default WorkStates;
