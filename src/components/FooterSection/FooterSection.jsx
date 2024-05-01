import EngineeringIcon from "@mui/icons-material/Engineering";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./footersection.css";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function FooterSection() {
  const { t } = useTranslation();

  return (
    <div className="FooterSectionContainer">
      <div className="FooterSection">
        <div className="FooterSectionTop">
          <div className="FooterSectionTopBars">
            <EngineeringIcon sx={{ color: "#00AD33" }} />
            <h2>{t("footerActions")}</h2>
            <ul className="FooterSectionTopBarsList">
              <li>
                <a href="#">{t("footerOurProducts")}</a>
              </li>
              <li>
                <a href="#">{t("footerWeBuying")}</a>
              </li>
              <li>
                <a href="#">{t("footerDevices")}</a>
              </li>
            </ul>
          </div>
          <div className="FooterSectionTopBars">
            <SupportAgentIcon sx={{ color: "#00AD33" }} />
            <h2> {t("footerContact")} </h2>
            <p> +994 12 222 22 22</p>
            <p>info@plast.az</p>
            <div className="icons">
              <div>
                <FacebookIcon
                  sx={{ width: "24px !important", color: "#848582" }}
                />
              </div>
              <div>
                <InstagramIcon
                  sx={{ width: "24px !important", color: "#848582" }}
                />
              </div>
              <div>
                <YouTubeIcon
                  sx={{ width: "24px !important", color: "#848582" }}
                />
              </div>
              <div>
                <WhatsAppIcon
                  sx={{ width: "24px !important", color: "#848582" }}
                />
              </div>
            </div>
          </div>
          <div className="FooterSectionTopBars">
            <LocationOnIcon sx={{ color: "#00AD33" }} />
            <h2>{t("footerLocationLabel")}</h2>
            <p>{t("footerLocation")}</p>
          </div>
        </div>
        <div className="FooterSectionBottom">
          <p style={{ color: "#848582" }}>
            Copyright © 2021{" "}
            <span style={{ color: "#fff", fontWeight: 700 }}>PLAST.</span>{" "}
            {t("footerRight")}
          </p>
          <p style={{ color: "#848582" }}>
            Developed by{" "}
            <span style={{ color: "#fff", fontWeight: 700 }}>
              Crocusoft LLC.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
