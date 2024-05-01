import React, { Suspense, useState } from "react";
import logo from "/src/assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import "../navbar.css";
import { useGetNavItemsQuery } from "/src/redux/api/prApi.js";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const lngs = {
  az: { nativeName: "az" },
  en: { nativeName: "en" },
  ru: { nativeName: "ru" },
};

const activeStyle = {
  color: "#fff",
};

const inactiveStyle = {
  color: "#fff9",
};

function NavbarTop() {
  const location = useLocation();
  const { t } = useTranslation();

  const { data, isLoading } = useGetNavItemsQuery();
  console.log(data);
  if (isLoading) return <h1>loading...</h1>;

  return (
    <div className="navbarTop">
      <img src={logo} alt="" className="navlogo" />
      <div className="navListItems">
        {data.map((item, index) => (
          <NavLink
            className={"navLinks"}
            to={item.navigate}
            key={item.id}
            style={
              location.pathname === item.navigate ? activeStyle : inactiveStyle
            }
          >
            {t(`navlinks.navlink${index + 1}`, {
              defaultValue: `navlink${index + 1}`,
            })}
          </NavLink>
        ))}
      </div>
      <div className="navRight" style={{ display: "flex" }}>
        <NavLink to="/search">
          <IconButton>
            <SearchIcon
              sx={{
                color: "#fff",
                width: "24px !important",
              }}
            />
          </IconButton>
        </NavLink>
        <FormControl
          fullWidth
          sx={{
            background: "#00ad33",
            width: "70%",
            borderRadius: "20px",
            alignItems: "center",
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="lng"
            defaultValue="az"
          >
            {Object.keys(lngs).map((lng) => (
              <MenuItem
                key={lng}
                value={lng}
                onClick={() => i18n.changeLanguage(lng)}
                disabled={i18n.resolvedLanguage === lng}
              >
                {lngs[lng].nativeName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default NavbarTop;
