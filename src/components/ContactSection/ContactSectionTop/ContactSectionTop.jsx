import React from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function ContactSectionTop() {
  const { t } = useTranslation();

  return (
    <div className="ContactSectionTop">
      {" "}
      <p style={{ color: "#000", fontWeight: 700 }}>
        {t("contactSectionLabelFirst")}{" "}
        <p style={{ color: "#00ad33" }}>{t("contactSectionLabelSecond")}</p>
      </p>
    </div>
  );
}

export default ContactSectionTop;
