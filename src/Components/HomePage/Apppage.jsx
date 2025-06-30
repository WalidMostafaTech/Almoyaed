import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { t } from "i18next";
import bg from "../../../public/bg.png"
import WepSerivceApi from "../../_Service/Setting";
import failBackLogo from "/logo.png"

const Apppage = () => {
  const { data } = WepSerivceApi();
  const logo = data?.team?.dlogo
  return (
    <section className="h-[700px] md:h-[1200px]">
      <div className="relative w-full h-[225px] md:h-[550px] mb-[200px]">
        <img className="w-full h-full" loading="lazy" src={bg} alt="img" />
        <div className="absolute inset-0 flex items-start top-[3%] justify-center">
          <div className="flex flex-col items-center gap-6">

            {logo ? <img loading='lazy' className="w-[100px] md:w-[200px] md:mb-7" src={logo} alt="logo" />
              :
              <img loading='lazy' className="w-[100px] md:w-[200px] md:mb-7" src={failBackLogo} alt="logo" />}
            <p className="text-white text-[15px] md:text-[35px] font-bold">
              {t("download_app_now")}
            </p>{" "}
            <div className="flex items-center gap-5">
              <Link to={""} className="hover:scale-110">
                <img
                  className="w-[100px] md:w-[200px]"
                  width={150}
                  height={150}
                  src={assets.googleplay}
                />
              </Link>
              <Link to={""} className="hover:scale-110">
                <img
                  className="w-[100px] md:w-[200px]"
                  width={150}
                  height={150}
                  src={assets.appstore}
                />
              </Link>
            </div>
            <img
              className="w-[210px] md:w-[380px] max-w-full"
              src={assets.iconPhone}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apppage;
