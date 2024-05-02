import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./requestmodal.css";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function RequestModal() {
  const { t } = useTranslation();

  const [formData, setFormData] = React.useState({
    category: "",
    size: "",
    name: "",
    number: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatPhoneNumber = (inputValue) => {
    const cleanedValue = inputValue.replace(/\D/g, "");

    let formattedValue = "";
    if (cleanedValue.length > 3) {
      formattedValue += `(${cleanedValue.slice(0, 3)})`;

      if (cleanedValue.length > 3) {
        formattedValue += `${cleanedValue.slice(3, 6)}`;

        if (cleanedValue.length > 6) {
          formattedValue += `-${cleanedValue.slice(6, 10)}`;
        }
      }
    } else {
      formattedValue = cleanedValue;
    }

    return formattedValue;
  };

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setFormData({ ...formData, number: formattedValue });
  };

  const saveDataToLocal = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <div
      className="modal"
      style={{
        position: "absolute",
        width: 400,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        borderRadius: "16px",
      }}
    >
      <Typography variant="h4" sx={{ color: "#002633" }}>
        {t("contactBtn")}
      </Typography>
      <FormControl className="modal-form" fullWidth>
        <InputLabel id="demo-simple-select-label">{t("category")}</InputLabel>
        <Select
          labelId="category"
          value={formData.category}
          label="Satdığınız malın kateqoriyası"
          name="category"
          onChange={handleChange}
        >
          <MenuItem value={"paper"}>{t("paper")}</MenuItem>
          <MenuItem value={"cardon"}>{t("paper")}</MenuItem>
          <MenuItem value={"device"}>{t("devices")}</MenuItem>
          <MenuItem value={"mixed"}>{t("mixed")}</MenuItem>
          <MenuItem value={"newspaper"}>{t("newspaper")}</MenuItem>
        </Select>
        <TextField
          id="size"
          label={t("size")}
          value={formData.size}
          name="size"
          onChange={handleChange}
        />
        <TextField
          id="namesur"
          label={t("yourname")}
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <TextField
          id="number"
          label={t("mobileNum")}
          type="text"
          value={formData.number}
          name="number"
          onChange={handlePhoneNumberChange}
        />
        <Button
          variant="contained"
          onClick={saveDataToLocal}
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
      </FormControl>
    </div>
  );
}

export default RequestModal;
