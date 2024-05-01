import React from "react";
import manPhoto from "../../../assets/infoSectionImg.png";
import Typography from "@mui/material/Typography";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function InfoSectionBottom() {
  const { t } = useTranslation();

  return (
    <div className="InfoSectionBottom">
      <div className="InfoSectionBottomImg">
        <img src={manPhoto} alt="" />
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
      <div className="InfoSectionBottomText">
        <Typography variant="h4" color="initial" sx={{ fontWeight: 700 }}>
          {t("whoWeAre")}
        </Typography>
        <Typography variant="p" color="initial" sx={{ color: "dark grey" }}>
          Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
          euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod
          ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique.
          Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing
          pellentesque euismod ut pharetra.{" "}
        </Typography>
        <Typography variant="p" color="initial">
          Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
          euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod
          ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique.
          Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing
          pellentesque euismod ut pharetra.
        </Typography>
      </div>
    </div>
  );
}

export default InfoSectionBottom;
