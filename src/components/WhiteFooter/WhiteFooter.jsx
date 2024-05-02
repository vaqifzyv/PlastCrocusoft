import EngineeringIcon from "@mui/icons-material/Engineering";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./whitefooter.css";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function WhiteFooter() {
  const { t } = useTranslation();

  return (
    <div className="WhiteFooterContainer">
      <div className="WhiteFooter">
        <div className="WhiteFooterTop">
          <div className="WhiteFooterTopBars">
            <EngineeringIcon sx={{ color: "#00AD33" }} />
            <h2>{t("footerActions")}</h2>
            <ul className="WhiteFooterTopBarsList">
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
          <div className="WhiteFooterTopBars">
            <SupportAgentIcon sx={{ color: "#00AD33" }} />
            <h2>{t("footerContact")} </h2>
            <p> +994 12 222 22 22</p>
            <p>info@plast.az</p>
            <div className="icons">
              <div>
                <FacebookIcon
                  sx={{ width: "24px !important", color: "#000" }}
                />
              </div>
              <div>
                <InstagramIcon
                  sx={{ width: "24px !important", color: "#000" }}
                />
              </div>
              <div>
                <YouTubeIcon sx={{ width: "24px !important", color: "#000" }} />
              </div>
              <div>
                <WhatsAppIcon
                  sx={{ width: "24px !important", color: "#000" }}
                />
              </div>
            </div>
          </div>
          <div className="WhiteFooterTopBars">
            <LocationOnIcon sx={{ color: "#00AD33" }} />
            <h2>{t("footerLocationLabel")}</h2>
            <p>{t("footerLocation")}</p>
          </div>
        </div>
        <div className="WhiteFooterBottom">
          <p style={{ color: "#000" }}>
            Copyright © 2021{" "}
            <span style={{ color: "#000", fontWeight: 700 }}>PLAST.</span>{" "}
            {t("footerRight")}
          </p>
          <p style={{ color: "#000" }}>
            Developed by{" "}
            <span style={{ color: "#000", fontWeight: 700 }}>
              Crocusoft LLC.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhiteFooter;
