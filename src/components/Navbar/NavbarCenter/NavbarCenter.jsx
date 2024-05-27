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
import "../navbar.css";

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
        variant="h1"
        color="initial"
        sx={{ fontSize: "18px", color: "#fff" }}
      >
        <RenderIf condition={pathname === "/"} renderElse={""}>
          {t("betterFuture")}
        </RenderIf>
      </Typography>
      <p
        className="navbarCenterWord"
        style={{ color: "#fff", fontWeight: 700 }}
      >
        {navbarConditional[pathname]}
      </p>
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
        <IconButton className="arrowsDown" onClick={handleClick}>
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
