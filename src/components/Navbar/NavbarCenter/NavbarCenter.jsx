import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Modal } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import IconButton from "@mui/material/IconButton";
import { useLocation } from "react-router-dom";
import { RenderIf } from "../..";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useRef } from "react";
import RequestModal from "../../RequestModal/RequestModal";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function NavbarCenter() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  const navbarConditional = {
    "/": t("navbarConditionalFirst"),
    "/main": t("navbarConditionalSecond"),
    "/ourproducts": t("navbarConditionalThird"),
    "/devices": t("navbarConditionalFourth"),
    "/info": t("navbarConditionalFifth"),
    "/contact": t("navbarConditionalSiixth"),
    "/search": t("navbarConditionalSeventh"),
  };
  const { pathname } = useLocation();
  function handleClick(e) {
    e.preventDefault();
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const bottomRef = useRef(null);

  const breadcrumbs = [
    <Link key="1" to="/" style={{ color: "#fff", fontSize: "16px" }}>
      {t("breadcrumbs")}
    </Link>,
    <Link key="2" to={pathname} style={{ color: "#fff", fontSize: "16px" }}>
      {navbarConditional[pathname]}
    </Link>,
  ];

  return (
    <div className="navCenter">
      <Typography
        variant="h4"
        color="initial"
        sx={{ fontSize: "18px", color: "#fff" }}
      >
        <RenderIf condition={pathname === "/"} renderElse={""}>
          {t("betterFuture")}
        </RenderIf>
      </Typography>
      <Typography
        variant="h2"
        color="initial"
        sx={{ fontSize: "56px", color: "#fff", fontWeight: 700 }}
      >
        {navbarConditional[pathname]}
      </Typography>
      <RenderIf condition={pathname === "/"}>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{
            backgroundColor: "#00ad33",
            fontSize: "14px",
            padding: "8px 16px",
            marginTop: "30px",
          }}
        >
          {" "}
          {t("contactBtn")}
        </Button>
      </RenderIf>
      <RenderIf condition={pathname !== "/"}>
        <Stack spacing={2} sx={{ marginBlock: "135px" }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </RenderIf>
      <RenderIf condition={pathname === "/"} renderElse={""}>
        <div ref={bottomRef}></div>
        <IconButton sx={{ marginBlock: "120px" }} onClick={handleClick}>
          <KeyboardDoubleArrowDownIcon
            sx={{
              color: "#fff",
              width: "24px !important",
            }}
          />
        </IconButton>
      </RenderIf>
      <div>
        <Modal open={open} onClose={handleClose}>
          <RequestModal />
        </Modal>
      </div>
    </div>
  );
}

export default NavbarCenter;
// import React, { useState, useRef } from "react";
// import Typography from "@mui/material/Typography";
// import { Button, Modal } from "@mui/material";
// import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// import IconButton from "@mui/material/IconButton";
// import { useLocation } from "react-router-dom";
// import { RenderIf } from "../..";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { Link } from "react-router-dom";
// import Stack from "@mui/material/Stack";
// import { initReactI18next, useTranslation } from "react-i18next";
// import i18n from "i18next";
// import RequestModal from "../../RequestModal/RequestModal";
// const translationAz = {
//   home: "Ana səhifə",
//   nature: "TƏBİƏTƏ ATMAYAQ!",
//   weAre: "BİZ ALIRIQ",
//   ourProducts: "MƏHSULLARIMIZ",
//   devices: "CİHAZLAR",
//   aboutUs: "HAQQIMIZDA MƏLUMAT",
//   contactUs: "BİZİMLƏ ƏLAQƏ",
//   search: "Axtar",
//   apply: "Müraciət et",
//   forABetterFuture: "Daha gözəl gələcək üçün",
// };

// const translationEn = {
//   home: "Home",
//   nature: "DO NOT POLLUTE NATURE!",
//   weAre: "WE BUYING",
//   ourProducts: "Our Products",
//   devices: "Devices",
//   aboutUs: "About Us",
//   contactUs: "Contact Us",
//   search: "Search",
//   apply: "Apply",
//   forABetterFuture: "For a Better Future",
// };

// const translationRu = {
//   home: "Главная",
//   nature: "НЕ ЗАГРЯЗНЯЙТЕ ПРИРОДУ!",
//   weAre: "МЫ ПОКУПАЕМ",
//   ourProducts: "Наши продукты",
//   devices: "Устройства",
//   aboutUs: "О нас",
//   contactUs: "Свяжитесь с нами",
//   search: "Поиск",
//   apply: "Подать заявку",
//   forABetterFuture: "Для лучшего будущего",
// };

// i18n.use(initReactI18next).init({
//   resources: {
//     az: { translation: translationAz },
//     en: { translation: translationEn },
//     ru: { translation: translationRu },
//   },
//   lng: "az",
//   fallbackLng: "az",
//   interpolation: { escapevalue: false },
// });

// function NavbarCenter() {
//   const [open, setOpen] = useState(false);
//   const { t, i18n } = useTranslation();
//   const { pathname } = useLocation();
//   const bottomRef = useRef(null);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const navbarConditional = {
//     "/": t("nature"),
//     "/main": t("weAre"),
//     "/ourproducts": t("ourProducts"),
//     "/devices": t("devices"),
//     "/info": t("aboutUs"),
//     "/contact": t("contactUs"),
//     "/search": t("search"),
//   };

//   function handleClick(e) {
//     e.preventDefault();
//     if (bottomRef.current) {
//       bottomRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }

//   const breadcrumbs = [
//     <Link key="1" to="/" style={{ color: "#fff", fontSize: "16px" }}>
//       {t("home")}
//     </Link>,
//     <Link key="2" to={pathname} style={{ color: "#fff", fontSize: "16px" }}>
//       {navbarConditional[pathname]}
//     </Link>,
//   ];

//   return (
//     <div className="navCenter">
//       <Typography
//         variant="h4"
//         color="initial"
//         sx={{ fontSize: "18px", color: "#fff" }}
//       >
//         <RenderIf condition={pathname === "/"} renderElse={""}>
//           {t("forABetterFuture")}
//         </RenderIf>
//       </Typography>

//       <Typography
//         variant="h2"
//         color="initial"
//         sx={{ fontSize: "56px", color: "#fff", fontWeight: 700 }}
//       >
//         {navbarConditional[pathname]}
//       </Typography>
//       <RenderIf condition={pathname === "/"}>
//         <Button
//           variant="contained"
//           onClick={handleOpen}
//           style={{
//             backgroundColor: "#00ad33",
//             fontSize: "14px",
//             padding: "8px 16px",
//             marginTop: "30px",
//           }}
//         >
//           {t("apply")}
//         </Button>
//       </RenderIf>
//       <RenderIf condition={pathname !== "/"}>
//         <Stack spacing={2} sx={{ marginBlock: "135px" }}>
//           <Breadcrumbs separator="›" aria-label="breadcrumb">
//             {breadcrumbs}
//           </Breadcrumbs>
//         </Stack>
//       </RenderIf>
//       <RenderIf condition={pathname === "/"} renderElse={""}>
//         <div ref={bottomRef}></div>
//         <IconButton sx={{ marginBlock: "120px" }} onClick={handleClick}>
//           <KeyboardDoubleArrowDownIcon
//             sx={{ color: "#fff", width: "24px !important" }}
//           />
//         </IconButton>
//       </RenderIf>
//       <div>
//         <Modal open={open} onClose={handleClose}>
//           <RequestModal />
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default NavbarCenter;
