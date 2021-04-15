
import React from "react";
import CloseArrow from "../../img/croix.svg";
import ModalErrorStyled from "../../style/ModalErrorStyled.style";

function ModalError(props) {
  return (
    <ModalErrorStyled>
      <div className="modal--content">
        <div className="modal--title">
          <h2>{props.modalTitle}</h2>
          <img
            src={CloseArrow}
            alt="icon--close"
            className="close--arrow"
            onClick={props.closeModal}
          ></img>
        </div>
        <div className="modal--message">
          <p>{props.modalMessage}</p>
        </div>
        <div className="modal--btn">
          <input
            type="button"
            value={props.modalBtnValue}
            className="btn--ok"
            onClick={props.closeModal}
          ></input>
        </div>
      </div>
    </ModalErrorStyled>
  );
}

export default ModalError;