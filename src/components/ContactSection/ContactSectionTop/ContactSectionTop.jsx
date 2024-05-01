import React from "react";
import Typography from "@mui/material/Typography";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function ContactSectionTop() {
  const { t } = useTranslation();

  return (
    <div className="ContactSectionTop">
      {" "}
      <Typography
        variant="h3"
        color=""
        sx={{ display: "flex", fontWeight: 700 }}
      >
        {t("contactSectionLabelFirst")}{" "}
        <p style={{ color: "#00ad33" }}>{t("contactSectionLabelSecond")}</p>
      </Typography>
    </div>
  );
}

export default ContactSectionTop;
