"use client";
import React, { useState } from "react";
import Image from "next/image";
import moto from "../../../public/image/moto.png";
import panierrepas from "../../../public/image/panierrepas.png";
import "./Modal.css";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";
import store from "@/app/components/store";

const Modal: any = ({ showModal, setShowModal }: any) => {
  const router = useRouter();
  const { selectedCategorie } = useSnapshot(store);
  console.log({ selectedCategorie });
  const [chosenOption, setChosenOption] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleOptionClick = (option: string) => {
    setChosenOption(option);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleValidateClick = () => {
    if (selectedTime === "") {
      alert("insert time");
    } else if (chosenOption === "emporter") {
      router.push("/Page/ListProduit");
    } else if (chosenOption === "livraison") {
    } else {
      alert("choose sale mode");
    }
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container">
        {setShowModal && (
          <div className="modal-container">
            <div className="modal__clz">
              <div className="row">
                <div className="row">
                  <h2 style={{ width: "80%" }}>Modes de retrait</h2>
                  <span
                    onClick={handleCloseClick}
                    className="close-button"
                    style={{ width: "10%" }}
                  >
                    ×
                  </span>
                </div>

                <div className="options">
                  <div>
                    <Image
                      src={panierrepas}
                      alt="Emporter"
                      onClick={() => handleOptionClick("emporter")}
                      style={{
                        backgroundColor: "green",
                        borderRadius: "100%",
                      }}
                    />{" "}
                    <br />
                    <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
                      A emporter
                    </p>
                  </div>
                  <div>
                    <Image
                      src={moto}
                      alt="Livraison"
                      onClick={() => handleOptionClick("livraison")}
                      style={{
                        backgroundColor: "",
                        borderRadius: "100%",
                      }}
                    />
                    <br />
                    <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
                      Livraison
                    </p>
                  </div>
                </div>

                <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
                  Aujourd'hui
                </p>

                <div className="time-input">
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                  />
                </div>

                <button onClick={handleValidateClick} className="button">
                  Valider
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
