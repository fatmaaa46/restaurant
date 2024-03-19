// import React from "react";
// import { Button } from "react-bootstrap";
// import Image from 'next/image';
// import i1 from '../../../public/image/i1.jpg'
// import { useSnapshot } from "valtio";
// import store from "../store";

// const Modal2: React.FC<Modal2Props> = ({ showModal, setShowModal }: Modal2Props) => {
//     const { selectedCategorie, selectedImage } = useSnapshot(store);

//     const handleOrder = () => {
//         const item = {
//             uiiditem: "1223",
//             title: "pizza",
//             qte: 1,
//             prixuniter: "7",
//             prix: "total",
//             imageUrl: selectedImage // Ajoutez l'URL de l'image si nécessaire
//         };
//         store.addToCart(item); // Appel de l'action pour ajouter au panier
//         closeModal();
//     };

//     const handleCloseClick = () => {
//         setShowModal(false);
//     };

//     return (
//         <>
//             <div className="container">
//                 <div className="modal-container">
//                     <div className="modal-header">
//                         <h5 className="modal-title">Modal title</h5>
//                     </div>
//                     <div className="modal__clz">
//                         <div className="row">
//                             <div className="row">
//                                 <h2 style={{ width: "80%" }}>Modes de retrait</h2>
//                                 <span
//                                     onClick={handleCloseClick}
//                                     className="close-button"
//                                     style={{ width: "10%" }}
//                                 >
//                                     ×
//                                 </span>
//                             </div>
//                             <div className="modal-body">
//                                 <img className="card-img-top" src={selectedImage} alt="Card image cap" />

//                                 {/* <Image src={selectedImage} alt="Pizza" width={300} height={200} /> */}
//                                 <h2>Composition de la pizza :</h2>
//                                 <input
//                                     type="checkbox"
//                                     id="base"
//                                     name="composition"
//                                     value="base"
//                                     checked={baseChecked}
//                                     onChange={handleBaseChange}
//                                 />
//                                 <label htmlFor="base">Composition de base</label>
//                                 <br />
//                                 <input
//                                     type="checkbox"
//                                     id="supplement"
//                                     name="composition"
//                                     value="supplement"
//                                     checked={supplementChecked}
//                                     onChange={handleSupplementChange}
//                                 />
//                                 <label htmlFor="supplement">Pizza suppléments</label>
//                                 <br />
//                                 <button onClick={handleOrder}>ajouter dans panier </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Modal2;
