import React from "react";

const LargeImg = ({ largeImg, closeModal }) => (
  <div className="ModalWrapper">
    <img src={largeImg} alt={largeImg} className="LargeImg" />
    <button type="button" className="CloseModal" onClick={closeModal}></button>
  </div>
);

export default LargeImg;
