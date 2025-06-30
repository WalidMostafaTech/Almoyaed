import { assets } from "../../assets/assets";
import Buttons from "../GlobalComponents/Buttons";
import useApi from "../../_Service/UseApi";
import { t } from "i18next";
const AboutSection2 = () => {
  const { data } = useApi();

  if (!data || data.length === 0) return <p>No data available</p>;
  const firstItem = data[0];
  return (
    <section className="md:container md:px-0 mb-10 ">
      <div className="text-center">
        <h2 className="text-[#333333] font-bold text-[25px] md:text-[30px]">
          {t("recent_works")}{" "}
          <span className="text-[#686465]">{t("recently")}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 place-items-center lg:place-items-start">
        <div className="flex gap-2 rounded-[11.29px]  w-full h-[400px] md:h-full  max-w-[90%] overflow-hidden">
          <img
            className="w-1/2 object-cover"
            src={firstItem.before_images[0]}
            alt="img"
            loading="lazy"
          />
          <img
            className="w-1/2 object-cover"
            src={firstItem.after_images[0]}
            alt="img"
            loading="lazy"
          />
        </div>
        <div className="flex mt-5 lg:mt-0 flex-col gap-7 py-3">
          <h2 className="text-[27px] text-center lg:text-start font-bold text-[#B35919]">
            {firstItem.name}
          </h2>
          <div className="flex items-center gap-2 ">
            <img src={assets.iconBuild} alt="img" />
            <p className="text-[#AC9899] font-medium">{firstItem.location}</p>
          </div>
          <p className="font-bold">{t('project_descriptionn')}</p>
          <p className="h-full max-h-[300px] lg:max-h-[200px] w-full text-center md:text-start leading-9 text-[#999999]"  dangerouslySetInnerHTML={{ __html: firstItem.description }}>
          </p>
          <div className="mt-10 text-center lg:text-start">
            <Buttons href={`/works/${firstItem.id}`} text={t("project_details")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
