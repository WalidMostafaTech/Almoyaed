import { t } from "i18next"
import WepSerivceApi from "../../_Service/Setting"

const BrivacyPage = () => {

    const { data } = WepSerivceApi()
    const privacyHtml = data?.terms_and_conditions?.description

console.log(privacyHtml)

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 ">
            <h1 className="text-2xl text-[#1A1A1A] font-bold mb-10">{t("privacy1")} <span className="text-[#686465]">{t("privacy2")}</span></h1>
            <div className="text-base mb-4 leading-10" dangerouslySetInnerHTML={{ __html: privacyHtml }} />
        </div>
    )
}

export default BrivacyPage