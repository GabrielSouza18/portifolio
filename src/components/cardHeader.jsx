import React from "react";
import myPhoto from "../assets/img/myPhoto.jpg";
import IconArrow from "../assets/svg/iconArrow.svg";
import "../styles/app.sass";
import Curriculo from "../pdf/Curriculo.pdf"


const CardHeader = () => {
  return (
    <>
      <div className="card">
        <div className="cardTop">
          <img src={myPhoto} id="myPhoto" />
        </div>
        <div className="cardContent">
          <p className="myName">Olá, eu sou o Gabriel</p>
          <p className="myDescription">
            Desenvolvo <span className="spanTextBlue">ideias</span> e ajudo a
            construir um mundo melhor através do software.
          </p>
        </div>
        <div className="cardFooter">
          <button className="btnContact">Contato</button>
          <a href={Curriculo} download="Curriculo_GabrielVinicius">
            <button className="btnDownloadCV">
              Download CV <img src={IconArrow} className="icon" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default CardHeader;
