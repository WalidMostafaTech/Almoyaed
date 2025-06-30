import WepSerivceApi from "../../_Service/Setting";
import { assets } from "../../assets/assets"
const IconwhatsApp = () => {
    const { data, loading, error } = WepSerivceApi();
    console.log(data?.social?.whatsapp)
    return (
        <a href={`https://wa.me/${data?.social?.whatsapp}`} >
            <img className='fixed bottom-[3%] right-[5%] w-[50px] z-50' src={assets.IconWhatsApp} alt='icon' />
       </a>
    )
}

export default IconwhatsApp