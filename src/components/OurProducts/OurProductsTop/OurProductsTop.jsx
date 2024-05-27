import Typography from "@mui/material/Typography";
import "../ourproducts.css";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";
import "../ourproducts.css";

function OurProductsTop() {
  const { t } = useTranslation();

  return (
    <div className="OurProductsTop">
      {" "}
      <p style={{ color: "#000", fontWeight: 700 }}>
        {t("ourSectionLabelFirst")}{" "}
        <p style={{ color: "#00ad33" }}>{t("ourSectionLabelSecond")} </p>
      </p>
    </div>
  );
}

export default OurProductsTop;
