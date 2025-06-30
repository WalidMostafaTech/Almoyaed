import ScaleLoader from 'react-spinners/ScaleLoader';
import WepSerivceApi from '../../_Service/Setting'
// import { assets } from '../../assets/assets'

const Service1 = () => {
    const { data, loading, error } = WepSerivceApi()
    if (loading) return (
        <>
            <div className="flex justify-center items-center h-screen">
                <ScaleLoader />
            </div>
        </>
    );
    if (error) return <p>error</p>

    console.log(data.team);

    return (
        <section className='flex items-center flex-col-reverse md:flex-row justify-between'>
            <div className='w-full md:w-[50%] flex flex-col gap-10 text-center items-center md:text-start md:items-start'>
                <h2 className='text-[#1A1A1A] text-[25px] font-bold'>{data.team.title.slice(0, 3)}  <span className='text-[#686465]'>{data.team.title.slice(3,)} </span></h2>
                <p className='text-[#999999] font-medium leading-8 ' >{data.team.description}</p>
            </div>
            {/* <div className='mb-20 md:mb-0 grid grid-cols-2 mx-auto gap-1 shadow-[0px_3.59px_26.14px_0px_#00000040] rotate-[45.65deg]'> */}
            {/* {photes.map(img => (
                    <div key={img} className='w-[120px] h-[120px] md:w-[180px] md:h-[180px] max-w-full overflow-hidden rounded-[5px] '>
                        <img className='w-full h-full max-w-full object-cover ' src={img.img} alt='img' />
                    </div>
                ))} */}
            <div className=' md:w-[35%] md:h-full max-w-full rounded-[5px] '>
                <img className='w-full h-full max-w-full object-cover ' src={data.team.image} alt='img' />
            </div>
            {/* </div> */}
        </section>
    )
}

export default Service1