import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./requestmodal.css";

function RequestModal() {
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
        MÜRACİƏT ET
      </Typography>
      <FormControl className="modal-form" fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="category"
          value={formData.category}
          label="Satdığınız malın kateqoriyası"
          name="category"
          onChange={handleChange}
        >
          <MenuItem value={"paper"}>Kağızlar</MenuItem>
          <MenuItem value={"cardon"}>Karton Kağızlar</MenuItem>
          <MenuItem value={"device"}>Cihaz</MenuItem>
          <MenuItem value={"mixed"}>Qarığıq</MenuItem>
          <MenuItem value={"newspaper"}>Qəzetlər</MenuItem>
        </Select>
        <TextField
          id="size"
          label="Çəkisi"
          value={formData.size}
          name="size"
          onChange={handleChange}
        />
        <TextField
          id="namesur"
          label="Ad və soyad"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <TextField
          id="number"
          label="Əlaqə nömrəniz"
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
          Müraciət et
        </Button>
      </FormControl>
    </div>
  );
}

export default RequestModal;
