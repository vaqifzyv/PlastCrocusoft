import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useGetDevicesCardQuery } from "/src/redux/api/prApi.js";
import "./devicessection.css";
import RequestModal from "../RequestModal/RequestModal";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

function DevicesSection() {
  const { data = [], isLoading } = useGetDevicesCardQuery();
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) return <h1>{t("loading")}</h1>;

  return (
    <div>
      <div className="cards">
        {data.map((card, index) => (
          <div key={card.id} className="card">
            <img src={card.photo} />
            <h2>
              {t(`devicesSectionCards.devicesCard${index + 1}`, {
                defaultValue: `devicesCard${index + 1}`,
              })}
            </h2>
            <p>{card.description}</p>
            <div className="cardButtons">
              <Button
                variant="contained"
                style={{
                  color: "#000",
                  backgroundColor: "#F8F8F7",
                  fontSize: "14px",
                  padding: "8px 24px",
                  marginTop: "30px",
                }}
                onClick={() => handleOpen(card)}
              >
                {t("moreinformation")}
              </Button>
              <Button
                onClick={handleOpenModal}
                variant="contained"
                style={{
                  backgroundColor: "#00ad33",
                  fontSize: "14px",
                  padding: "8px 24px",
                  marginTop: "30px",
                }}
              >
                {t("contactBtn")}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modal">
          {selectedCard && (
            <div className="modalContent">
              <h2>{selectedCard.title}</h2>
              <img src={selectedCard.photo} />
              <p>{selectedCard.description}</p>
            </div>
          )}
        </div>
      </Modal>
      <div>
        <Modal open={openModal} onClose={handleCloseModal}>
          <RequestModal />
        </Modal>
      </div>
    </div>
  );
}

export default DevicesSection;
