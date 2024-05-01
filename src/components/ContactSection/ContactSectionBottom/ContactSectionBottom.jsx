import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function ContactSectionBottom() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });
  const { t } = useTranslation();

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
    <div className="ContactSectionBottomContainer">
      <div className="ContactSectionBottom">
        <TextField
          onChange={handleChange}
          id="outlined-textarea"
          label={t("yourname")}
          value={formData.name}
          color="success"
          style={{ color: "#fff" }}
          name="name"
        />
        <TextField
          id="outlined-number"
          label={t("mobileNum")}
          color="success"
          style={{ marginBottom: "24px" }}
          type="text"
          value={formData.number}
          onChange={handlePhoneNumberChange}
        />
        <TextField
          className="message"
          id="outlined-basic"
          label={t("message")}
          variant="outlined"
          color="success"
          onChange={handleChange}
          value={formData.message}
          name="message"
        />
      </div>
      <div className="ContactSectionBottomButton">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#00ad33",
            fontSize: "14px",
            padding: "8px 12px",
            marginTop: "30px",
            textTransform: "capitalize",
            fontWeight: 600,
          }}
          onClick={saveDataToLocal}
        >
          {" "}
          {t("send")}
        </Button>
      </div>
    </div>
  );
}

export default ContactSectionBottom;
