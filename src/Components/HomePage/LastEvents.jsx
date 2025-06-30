import HeaderSwiper from "../GlobalComponents/HeaderSwiper";
import SwiperlastEvents from "./SwiperlastEvents";
import Api from "../../_Service/Api";
import { t } from "i18next";

const LastEvents = () => {
  const { data, loading, error } = Api();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="my-[70px] md:my-[120px] flex flex-col gap-12">
      <div className="md:container px-3 md:px-0">
        <HeaderSwiper text1={t("last_events")} />
      </div>

      <SwiperlastEvents />
    </div>
  );
};

export default LastEvents;
