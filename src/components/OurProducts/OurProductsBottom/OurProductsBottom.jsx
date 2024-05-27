import { useState } from "react";
import { useGetOurCardsQuery } from "/src/redux/api/prApi.js";
import { Button, Modal } from "@mui/material";
import RequestModal from "../../RequestModal/RequestModal";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";
import "../ourproducts.css";

function OurProductsBottom() {
  const { data = [], isLoading } = useGetOurCardsQuery();
  const { t } = useTranslation();

  const [open, setopen] = useState(false);

  const handleOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  if (isLoading) return <h1>{t("loading")}</h1>;

  return (
    <div className="ourCardsContainer">
      <div className="ourCards">
        {data.map((cards, index) => (
          <div key={cards.id} className="ourCard">
            <div className="ourCardImg">
              {" "}
              <img src={cards.photo} />
            </div>
            <h2>
              {t(`mainSectionCards.mainCard${index + 1}`, {
                defaultValue: `mainCard${index + 1}`,
              })}
            </h2>
            <p>{cards.description}</p>
            <div className="ourCardButtons">
              <Button
                onClick={handleOpen}
                variant="contained"
                style={{
                  backgroundColor: "#00ad33",
                  marginTop: "30px",
                  fontWeight: "600",
                }}
              >
                {" "}
                {t("contactBtn")}
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#090c06",
                  marginTop: "30px",
                  fontWeight: "600",
                }}
              >
                {" "}
                5 azn / 1 kg
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Modal open={open} onClose={handleClose}>
          <RequestModal />
        </Modal>
      </div>
    </div>
  );
}

export default OurProductsBottom;
