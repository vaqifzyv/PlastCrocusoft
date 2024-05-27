import React, { Suspense, useState } from "react";
import logo from "/src/assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import "../navbar.css";
import { useGetNavItemsQuery } from "/src/redux/api/prApi.js";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

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
  const [anchorEl, setAnchorEl] = useState(null);

  const { data, isLoading } = useGetNavItemsQuery();
  console.log(data);
  if (isLoading) return <h1>loading...</h1>;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="navbarMobileMenu">
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {data.map((item, index) => (
            <NavLink
              className={"mobileNavLinks"}
              to={item.navigate}
              key={item.id}
              style={
                location.pathname === item.navigate
                  ? activeStyle
                  : inactiveStyle
              }
            >
              <MenuItem onClick={handleClose} className="mobileNavTexts">
                <p>
                  {t(`navlinks.navlink${index + 1}`, {
                    defaultValue: `navlink${index + 1}`,
                  })}{" "}
                </p>
              </MenuItem>
            </NavLink>
          ))}
        </Menu>
        <div className="mobileNavRight">
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
              width: "50px",
              height: "50px",
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
      <div className="navbarTop">
        <img src={logo} alt="" className="navlogo" />
        <div className="navListItems">
          {data.map((item, index) => (
            <NavLink
              className={"navLinks"}
              to={item.navigate}
              key={item.id}
              style={
                location.pathname === item.navigate
                  ? activeStyle
                  : inactiveStyle
              }
            >
              <p>
                {t(`navlinks.navlink${index + 1}`, {
                  defaultValue: `navlink${index + 1}`,
                })}
              </p>
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
    </div>
  );
}

export default NavbarTop;
