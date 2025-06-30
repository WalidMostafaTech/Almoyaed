import { t } from "i18next"
import WepSerivceApi from "../../_Service/Setting"

const Terms = () => {
    const { data } = WepSerivceApi()
    const terms = data?.privacy_policy?.description
    return (
        <div className="container  mx-auto p-4 pt-6 md:p-6 ">
            <h1 className="text-2xl text-[#1A1A1A] font-bold my-10">{t("terms1")} <span className="text-[#686465]">{t("terms2")}</span></h1>
            <div className="text-base mb-4 leading-10" dangerouslySetInnerHTML={{ __html: terms }} />
        </div>
    ) 
}

export default Terms