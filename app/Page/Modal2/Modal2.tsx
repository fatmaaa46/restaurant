import React, { useState } from "react";
import Image from "next/image";
import Famille50 from "../../../public/images/guyancourt/Famille50.jpg";

import "./Modal2.css";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";
import store from "@/app/components/store";

interface Modal2Props {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    // Autres props si nécessaire
}

const Modal2: React.FC<Modal2Props> = ({ showModal, setShowModal }: Modal2Props) => {
    const router = useRouter();
    const { selectedCategorie } = useSnapshot(store);
    console.log({ selectedCategorie });
    const [baseChecked, setBaseChecked] = useState<boolean>(false);
    const [supplementChecked, setSupplementChecked] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleBaseChange = () => {
        setBaseChecked(!baseChecked);
    };

    const handleSupplementChange = () => {
        setSupplementChecked(!supplementChecked);
    };

    const handleOrder = () => {
        // Traitement de la commande de pizza ici
        alert("Pizza commandée avec succès !");
        closeModal();
    };

    const handleCloseClick = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="container">
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal} > ×</span>
                            <Image src={Famille50} alt="Pizza" width={300} height={200} />
                            <h2>Composition de la pizza :</h2>
                            <input
                                type="checkbox"
                                id="base"
                                name="composition"
                                value="base"
                                checked={baseChecked}
                                onChange={handleBaseChange}
                            />
                            <label htmlFor="base">Composition de base</label><br />
                            <input
                                type="checkbox"
                                id="supplement"
                                name="composition"
                                value="supplement"
                                checked={supplementChecked}
                                onChange={handleSupplementChange}
                            />
                            <label htmlFor="supplement">Pizza suppléments</label><br />
                            <button onClick={handleOrder}>Commander</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Modal2;
