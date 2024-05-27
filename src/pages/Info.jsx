import InfoSectionBottom from "../components/InfoSection/InfoSectionBottom/InfoSectionBottom";
import Typography from "@mui/material/Typography";
import forest from "../assets/infoSectionSecond.png";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";
import "../components/InfoSection/infosection.css";
function Info() {
  const { t } = useTranslation();

  return (
    <div>
      <InfoSectionBottom />
      <div className="InfoSectionBottom">
        <div className="InfoSectionBottomText">
          <Typography variant="h4" color="initial" sx={{ fontWeight: 700 }}>
            {t("whatAreWeDoing")}
          </Typography>
          <Typography variant="p" color="initial" sx={{ color: "dark grey" }}>
            Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
            euismod nisi viverra. Pretium id massa adipiscing pellentesque
            euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
            tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
            adipiscing pellentesque euismod ut pharetra.{" "}
          </Typography>
          <Typography variant="p" color="initial">
            Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
            euismod nisi viverra. Pretium id massa adipiscing pellentesque
            euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
            tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
            adipiscing pellentesque euismod ut pharetra.
          </Typography>
        </div>
        <div className="InfoSectionBottomImg">
          <img src={forest} alt="" />
          <div className="InfoSectionBottomImgLabel">
            <Typography
              variant="p"
              color="#fff"
              sx={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
              euismod nisi viverra. Pretium id massa adipiscing pellentesque
              euismod ut pharetra.{" "}
            </Typography>
            <br />
            <Typography variant="p" color="#fff">
              - Anton Çexov
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
