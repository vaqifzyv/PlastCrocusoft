import Typography from "@mui/material/Typography";
import "../mainsection.css";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function MainSectionTop() {
  const { t } = useTranslation();

  return (
    <div className="MainSectionTop">
      <Typography
        variant="h3"
        color="#fff"
        sx={{ display: "flex", fontWeight: 700 }}
      >
        {t("mainSectionLabelFirst")}{" "}
        <p style={{ color: "#00ad33" }}> {t("mainSectionLabelSecond")}</p>
      </Typography>
    </div>
  );
}

export default MainSectionTop;
