import React from "react";
import Typography from "@mui/material/Typography";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";
function InfoSectionTop() {
  const { t } = useTranslation();

  return (
    <div className="InfoSectionTop">
      <Typography
        variant="h3"
        color="#fff"
        sx={{ display: "flex", fontWeight: 700 }}
      >
        {t("infoSectionLabelFirst")}{" "}
        <p style={{ color: "#00ad33" }}>{t("infoSectionLabelSecond")}</p>
      </Typography>
    </div>
  );
}

export default InfoSectionTop;
