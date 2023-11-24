import React from "react";
import EmailSvg from "../../assets/svg/emailSVG.svg";

import "../styles/components/app.sass";

const ModalContact = () => {
  return (
    <>
      <div className="modalContact">
        <img src={EmailSvg} class="imgMailCard" />
        <a href="mailto:svgabriel18@hotmail.com">
          <button class="btnSendMail">Enviar E-Mail </button>
        </a>
      </div>
    </>
  );
};
export default ModalContact;
