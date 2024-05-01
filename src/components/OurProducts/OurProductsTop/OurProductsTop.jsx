import Typography from "@mui/material/Typography";
import "../ourproducts.css";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function OurProductsTop() {
  const { t } = useTranslation();

  return (
    <div className="OurProductsTop">
      {" "}
      <Typography
        variant="h3"
        color="#fff"
        sx={{ display: "flex", fontWeight: 700, color: "black" }}
      >
        {t("ourSectionLabelFirst")}{" "}
        <p style={{ color: "#00ad33" }}>{t("ourSectionLabelSecond")} </p>
      </Typography>
    </div>
  );
}

export default OurProductsTop;
